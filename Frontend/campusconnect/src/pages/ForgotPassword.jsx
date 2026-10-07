import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleReset = (event) => {

    event.preventDefault()

    if (email.trim() === '') {
      setMessage('Please enter your email.')
      return
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email.')
      return
    }

    setMessage('Password reset link has been sent to your email.')
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>CampusConnect</h1>

        <p className="subtitle">
          Reset your password
        </p>

        <form onSubmit={handleReset}>

          <div className="form-group">

            <label htmlFor="forgot-email">
              Email
            </label>

            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Send Reset Link
          </button>

          <div className="register-link">

            <span>
              Remember your password?{' '}
            </span>

            <Link
              to="/login"
              className="create-account"
            >
              Back to Login
            </Link>

          </div>

          {message && (
            <p className="message">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
  )
}

export default ForgotPassword