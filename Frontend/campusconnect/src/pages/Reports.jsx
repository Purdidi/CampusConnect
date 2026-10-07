import { Link } from 'react-router-dom'

function Reports() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Reports</h1>

          <p>
            View reports and activity insights across CampusConnect.
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
            📊
          </div>

          <h2>Reports</h2>

          <p>
            Reports and analytics will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Reports