import { useState } from 'react'
import { Link } from 'react-router-dom'
import FinanceLogo from '../components/FinanceLogo'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Veuillez entrer votre email')
      return
    }

    if (!email.includes('@')) {
      setError('Veuillez entrer un email valide')
      return
    }

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
    } catch (err) {
      setError('Erreur lors de la demande')
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
              <h3 className="text-blue-600 font-semibold text-sm mb-2">Besoin d'aide?</h3>
              <h1 className="text-4xl font-bold text-gray-800">Réinitialiser</h1>
              <h1 className="text-4xl font-bold text-gray-800">le mot de passe</h1>
            </div>

            {submitted ? (
              <div className="space-y-6">
                {/* Success Message */}
                <div className="p-4 text-green-700 bg-green-50 border border-green-200 rounded-lg">
                  ✓ Email envoyé avec succès à <strong>{email}</strong>
                </div>

                <p className="text-gray-700">
                  Vérifiez votre boîte mail et suivez les instructions pour réinitialiser votre mot de passe.
                </p>

                <Link
                  to="/login"
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 text-center"
                >
                  Retour à la connexion
                </Link>
              </div>
            ) : (
              <>
                {/* Error */}
                {error && (
                  <div className="mb-6 p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <p className="text-gray-600 text-sm mb-6">
                  Entrez votre adresse email et nous vous enverrons les instructions pour réinitialiser votre mot de passe.
                </p>

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
                      placeholder="votre@email.com"
                      disabled={loading}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                  >
                    {loading ? 'ENVOI EN COURS...' : 'ENVOYER LES INSTRUCTIONS'}
                  </button>
                </form>

                {/* Back Link */}
                <div className="mt-8 text-center">
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Retour à la connexion
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Right Side - Illustration */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 md:p-12 flex items-center justify-center hidden md:flex relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-20"></div>

            <div className="relative flex flex-col items-center justify-center">
              {/* SVG - Key illustration */}
              <svg
                viewBox="0 0 300 400"
                className="w-64 h-auto mb-6"
              >
                {/* Credit Card 1 - Front */}
                <rect x="40" y="100" width="140" height="90" rx="8" fill="#00BCD4" stroke="#0047AB" strokeWidth="2"/>
                <circle cx="60" cy="125" r="8" fill="#FFC107"/>
                <circle cx="75" cy="125" r="8" fill="#FFC107"/>
                <circle cx="60" cy="140" r="8" fill="#FFC107"/>
                <circle cx="75" cy="140" r="8" fill="#FFC107"/>
                <text x="140" y="165" fontSize="10" fill="#fff" fontWeight="bold">CARD</text>
                <rect x="60" y="155" width="100" height="8" fill="#FFD54F" rx="1"/>
                
                {/* Credit Card 2 - Back */}
                <rect x="120" y="160" width="140" height="90" rx="8" fill="#FF9800" stroke="#FF6F00" strokeWidth="2" opacity="0.8"/>
                <rect x="135" y="175" width="110" height="15" fill="#333" rx="2"/>
                <text x="190" y="202" fontSize="8" fill="#FFD54F" textAnchor="middle" fontWeight="bold">CVV</text>
                <text x="190" y="225" fontSize="9" fill="#fff" textAnchor="middle">••• •••</text>
                
                {/* Credit Card 3 - Tilted */}
                <rect x="80" y="240" width="140" height="90" rx="8" fill="#FFC107" stroke="#FF9800" strokeWidth="2" opacity="0.7" transform="rotate(-15 150 285)"/>
                <text x="150" y="280" fontSize="12" fill="#0047AB" textAnchor="middle" fontWeight="bold" transform="rotate(-15 150 280)">DEBIT</text>
                
                {/* Lock icon */}
                <g>
                  <rect x="130" y="55" width="40" height="35" rx="4" fill="none" stroke="#0047AB" strokeWidth="2"/>
                  <path d="M 140 55 L 140 40 Q 140 30 150 30 Q 160 30 160 40 L 160 55" stroke="#0047AB" strokeWidth="2" fill="none"/>
                  <circle cx="150" cy="68" r="3" fill="#0047AB"/>
                </g>
              </svg>

              <p className="text-gray-700 font-semibold text-center">Récupérez l'accès à votre compte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
