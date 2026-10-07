import { Link } from 'react-router-dom'

function Settings() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Settings</h1>

          <p>
            Manage your CampusConnect admin settings.
          </p>
        </div>

        <Link
          to="/admin-dashboard"
          className="back-button"
        >
          ← Back to Dashboard
        </Link>

      </div>

      <div className="requests-panel">

        <div className="empty-requests">

          <div className="empty-icon">
            ⚙️
          </div>

          <h2>Settings</h2>

          <p>
            Admin settings and preferences will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Settings