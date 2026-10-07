import { Link } from 'react-router-dom'

function Organizers() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Organizers</h1>

          <p>
            Manage and monitor organizers across CampusConnect.
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
            🧑‍💼
          </div>

          <h2>Organizers</h2>

          <p>
            Registered organizers will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Organizers