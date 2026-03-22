import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../shared/hooks/useAuth'
import FinanceLogo from '../components/FinanceLogo'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Veuillez remplir tous les champs')
      return
    }

    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              <FinanceLogo className="w-10 h-10" />
              <div>
                <span className="text-xl font-bold text-blue-600">FinanceApp</span>
                <p className="text-xs text-blue-500">Gestion des finances</p>
              </div>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h3 className="text-blue-600 font-semibold text-sm mb-2">Bienvenue !!!</h3>
              <h1 className="text-4xl font-bold text-gray-800">Connexion</h1>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="test@gmail.com"
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-8"
              >
                {loading ? 'CONNEXION EN COURS...' : 'SE CONNECTER'}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Vous n'avez pas de compte?{' '}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 md:p-12 flex items-center justify-center hidden md:flex relative overflow-hidden">
            <div className="relative flex flex-col items-center justify-center">
              {/* SVG Illustration - Coins/Money */}
              <svg
                viewBox="0 0 300 400"
                className="w-64 h-auto mb-6"
              >
                {/* Large coin background */}
                <circle cx="150" cy="180" r="70" fill="#FFC107" stroke="#FF9800" strokeWidth="3"/>
                <circle cx="150" cy="180" r="60" fill="#FFD54F" stroke="none"/>
                <text x="150" y="195" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#FF9800">$</text>
                
                {/* Coin 1 - Top left */}
                <circle cx="80" cy="100" r="35" fill="#FFC107" stroke="#FF9800" strokeWidth="2"/>
                <circle cx="80" cy="100" r="28" fill="#FFD54F" stroke="none"/>
                <text x="80" y="110" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#FF9800">$</text>
                
                {/* Coin 2 - Top right */}
                <circle cx="220" cy="110" r="30" fill="#FFC107" stroke="#FF9800" strokeWidth="2"/>
                <circle cx="220" cy="110" r="23" fill="#FFD54F" stroke="none"/>
                <text x="220" y="118" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#FF9800">$</text>
                
                {/* Coin 3 - Bottom left */}
                <circle cx="70" cy="280" r="25" fill="#FFC107" stroke="#FF9800" strokeWidth="2"/>
                <circle cx="70" cy="280" r="18" fill="#FFD54F" stroke="none"/>
                <text x="70" y="287" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FF9800">$</text>
                
                {/* Coin 4 - Bottom right */}
                <circle cx="240" cy="290" r="28" fill="#FFC107" stroke="#FF9800" strokeWidth="2"/>
                <circle cx="240" cy="290" r="21" fill="#FFD54F" stroke="none"/>
                <text x="240" y="297" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#FF9800">$</text>
                
                {/* Money bag */}
                <rect x="120" y="320" width="60" height="55" rx="5" fill="#00BCD4" stroke="#0047AB" strokeWidth="2"/>
                <circle cx="150" cy="320" r="8" fill="#0047AB"/>
                <path d="M 125 320 Q 150 335 175 320" stroke="#0047AB" strokeWidth="2" fill="none"/>
              </svg>

              <p className="text-gray-700 font-semibold text-center">Gérez vos finances facilement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
