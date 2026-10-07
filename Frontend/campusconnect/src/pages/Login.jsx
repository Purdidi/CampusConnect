import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = (event) => {

    event.preventDefault()

    if (email.trim() === '') {
      setMessage('Please enter your email.')
      return
    }

    if (password.trim() === '') {
      setMessage('Please enter your password.')
      return
    }

    if (role === '') {
      setMessage('Please select your role.')
      return
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email.')
      return
    }

   if (role === 'admin') {

  navigate('/admin-dashboard')

} else if (role === 'student') {

  setMessage('Student Dashboard will be connected by your teammate.')

} else if (role === 'organizer') {

  setMessage('Organizer Dashboard will be connected by your teammate.')

}
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>CampusConnect</h1>

        <p className="subtitle">
          Connect. Discover. Grow.
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-container">

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>
          <div className="form-group">

  <label htmlFor="role">
    Login As
  </label>

  <select
    id="role"
    value={role}
    onChange={(event) => setRole(event.target.value)}
  >

    <option value="">
      Select your role
    </option>

    <option value="student">
      Student
    </option>

    <option value="organizer">
      Organizer
    </option>

    <option value="admin">
      Admin
    </option>

  </select>

</div>

        <div className="forgot-password">

  <Link to="/forgot-password">
    Forgot Password?
  </Link>

</div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
<div className="register-link">
  <span>Don't have an account? </span>

  <Link
    to="/register"
    className="create-account"
  >
    Create Account
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

export default Login