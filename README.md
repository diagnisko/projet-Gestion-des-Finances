# Gestion des Finances

Une application web moderne de gestion des finances personnelles construite avec React, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Type-safe development
- **Vite** - Build tool et dev server
- **React Router** - Routage
- **Tailwind CSS** - Styling
- **ESLint** - Linting

## 📁 Structure du projet

```
src/
├── pages/           # Pages principales (Login, Register, Dashboard)
├── components/      # Composants réutilisables
├── shared/
│   └── hooks/       # Hooks personnalisés (useAuth, etc.)
├── utils/           # Fonctions utilitaires
├── App.tsx          # Composant racine
└── main.tsx         # Point d'entrée
```

## 🔧 Installation

1. Cloner le projet
```bash
git clone <repository>
cd projet-Gestion-des-Finances
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Construire pour la production
```bash
npm run build
```

## 📋 Fonctionnalités

### Authentification
- ✅ Connexion (Login)
- ✅ Inscription (Register)
- ✅ Récupération de mot de passe oublié
- ✅ Gestion de session avec localStorage

### Dashboard
- ✅ Vue d'accueil après connexion
- ✅ Affichage des informations utilisateur
- ✅ Navigation aux modules

### À venir
- 💰 Gestion des transactions
- 📊 Gestion des budgets
- 📈 Rapports financiers
- 💳 Synthèse des comptes
- 🔐 Sécurité renforcée

## 🎨 Interface utilisateur

- Design moderne et responsive
- Thème clair avec Tailwind CSS
- Formulaires validés
- Messages d'erreur utilisateur-friendly

## 📱 Responsive

L'application est entièrement responsive et fonctionne sur:
- Desktop (1920px et plus)
- Tablette (768px à 1024px)
- Mobile (320px à 767px)

## 🔐 Sécurité

- Authentification basée sur les tokens (localStorage)
- Routes protégées
- Validation des formulaires
- Gestion des erreurs sécurisée

## 🚦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Lance un aperçu de la version construite
- `npm run lint` - Exécute ESLint

## 📝 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

Créé par votre équipe de développement.

---

Pour plus d'informations ou pour contribuer, veuillez ouvrir une issue!
