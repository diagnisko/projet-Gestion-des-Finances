# Authentification - Gestion des Finances

Application d'authentification frontend avec **Login**, **Register** et **Reset Password**.

## 🎯 Fonctionnalités

✅ **Login** - Connexion avec email et mot de passe  
✅ **Register** - Inscription avec validation des données  
✅ **Forgot Password** - Récupération de mot de passe  
✅ **Validation complète** - Email, passwords, confirmations  
✅ **Gestion de session** - localStorage pour persister les données  
✅ **UI Moderne** - Tailwind CSS avec design responsive  

## 📁 Structure

```
src/
├── pages/
│   ├── Login.tsx           (Page de connexion)
│   ├── Register.tsx        (Page d'inscription)
│   └── ForgotPassword.tsx  (Récupération mot de passe)
├── shared/hooks/
│   └── useAuth.tsx         (Gestion authentification)
├── App.tsx                 (Routage)
└── main.tsx                (Point d'entrée)
```

## 🚀 Démarrage

```bash
npm install
npm run dev
```

## 🔐 Authentification

### Exemple d'utilisation:

```tsx
import { useAuth } from './shared/hooks/useAuth'

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth()

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Bienvenue, {user?.name}</p>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <button onClick={() => login('user@example.com', 'password')}>
          Connexion
        </button>
      )}
    </div>
  )
}
```

## 📝 Validation

### Login
- ✓ Email requis et valide
- ✓ Mot de passe requis (min 6 caractères)

### Register
- ✓ Nom requis
- ✓ Email requis et valide
- ✓ Mot de passe requis (min 6 caractères)
- ✓ Confirmation du mot de passe obligatoire

### Reset Password
- ✓ Vérification email

## 💾 Stockage

Les données utilisateur sont sauvegardées dans `localStorage` sous la clé `user`.

```json
{
  "id": "1",
  "name": "Utilisateur",
  "email": "utilisateur@email.com"
}
```

## 🎨 Design

- **Gradient**: Violet/Bleu moderne
- **Responsive**: Mobile-first
- **Animations**: Transitions fluides
- **Accessibilité**: Formulaires validés

## 🧪 Comptes de test

```
Email: test@test.com
Mdp: 123456
```

## 📦 Dépendances principales

- React 18
- React Router v6
- TypeScript
- Tailwind CSS
- Vite

---

**Prêt à développer votre système d'authentification!** 🔐
