import { Link } from 'react-router-dom'

function Events() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Events</h1>

          <p>
            Manage and monitor events across CampusConnect.
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
            📅
          </div>

          <h2>Events</h2>

          <p>
            Events created and approved by organizers will
            appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Events