import { Link } from 'react-router-dom'

function Users() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Users</h1>

          <p>
            Manage and monitor users across CampusConnect.
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
            👤
          </div>

          <h2>Users</h2>

          <p>
            Registered CampusConnect users will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Users