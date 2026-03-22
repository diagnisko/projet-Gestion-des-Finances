import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginNew from './pages/LoginNew'
import RegisterNew from './pages/RegisterNew'
import ForgotPasswordNew from './pages/ForgotPasswordNew'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginNew />} />
        <Route path="/register" element={<RegisterNew />} />
        <Route path="/forgot-password" element={<ForgotPasswordNew />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
