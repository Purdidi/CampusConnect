import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {

    event.preventDefault()

    if (name.trim() === '') {
      setMessage('Please enter your name.')
      return
    }

    if (email.trim() === '') {
      setMessage('Please enter your email.')
      return
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email.')
      return
    }

    if (password.trim() === '') {
      setMessage('Please enter a password.')
      return
    }

    if (confirmPassword.trim() === '') {
      setMessage('Please confirm your password.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Registration details are valid.')
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>CampusConnect</h1>

        <p className="subtitle">
          Create your account
        </p>

        <form onSubmit={handleRegister}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email</label>

            <input
              type="email"
              id="register-email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>

            <input
              type="password"
              id="register-password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Create Account
          </button>

          <div className="register-link">
            <span>Already have an account? </span>

            <Link
              to="/login"
              className="create-account"
            >
              Login
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

export default Register