import { Link } from 'react-router-dom'

function EventRequests() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Event Requests</h1>

          <p>
            Review event requests submitted by organizers.
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
            📋
          </div>

          <h2>Event Requests</h2>

          <p>
            Event requests submitted by organizers will
            appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default EventRequests