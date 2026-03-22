import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../shared/hooks/useAuth'
import FinanceLogo from '../components/FinanceLogo'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError('Veuillez remplir tous les champs')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      return
    }

    setLoading(true)
    try {
      await register(formData.name, formData.email, formData.password)
      navigate('/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
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
              <h1 className="text-4xl font-bold text-gray-800">S'inscrire</h1>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="Jean Dupont"
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="votre@email.com"
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                {loading ? 'INSCRIPTION EN COURS...' : 'S\'INSCRIRE'}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Vous avez un compte?{' '}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 md:p-12 flex items-center justify-center hidden md:flex relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-20"></div>

            <div className="relative flex flex-col items-center justify-center">
              {/* SVG - Different illustration for signup */}
              <svg
                viewBox="0 0 300 400"
                className="w-64 h-auto mb-6"
              >
                {/* Bar Chart - Graphiques */}
                {/* Bar 1 */}
                <rect x="50" y="200" width="40" height="120" fill="#00BCD4" stroke="#0047AB" strokeWidth="2" rx="5"/>
                <text x="70" y="330" fontSize="12" textAnchor="middle" fill="#333">Q1</text>
                
                {/* Bar 2 */}
                <rect x="110" y="140" width="40" height="180" fill="#FFC107" stroke="#FF9800" strokeWidth="2" rx="5"/>
                <text x="130" y="330" fontSize="12" textAnchor="middle" fill="#333">Q2</text>
                
                {/* Bar 3 */}
                <rect x="170" y="100" width="40" height="220" fill="#FF9800" stroke="#FF6F00" strokeWidth="2" rx="5"/>
                <text x="190" y="330" fontSize="12" textAnchor="middle" fill="#333">Q3</text>
                
                {/* Bar 4 */}
                <rect x="230" y="130" width="40" height="190" fill="#00BCD4" stroke="#0047AB" strokeWidth="2" rx="5"/>
                <text x="250" y="330" fontSize="12" textAnchor="middle" fill="#333">Q4</text>
                
                {/* Axis line */}
                <line x1="40" y1="320" x2="280" y2="320" stroke="#333" strokeWidth="2"/>
                <line x1="40" y1="60" x2="40" y2="320" stroke="#333" strokeWidth="2"/>
                
                {/* Trend arrow */}
                <path d="M 50 280 L 80 220 L 110 180 L 140 120 L 170 80" stroke="#0047AB" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <polygon points="170,80 175,95 165,90" fill="#0047AB"/>
                
                {/* Percentage text */}
                <text x="150" y="50" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#0047AB">+45%</text>
              </svg>

              <p className="text-gray-700 font-semibold text-center">Créez votre compte en quelques secondes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
