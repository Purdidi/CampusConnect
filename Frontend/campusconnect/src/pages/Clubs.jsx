import { Link } from 'react-router-dom'

function Clubs() {

  return (
    <div className="admin-page">

      <div className="requests-page-header">

        <div>
          <h1>Clubs</h1>

          <p>
            Manage and monitor clubs across CampusConnect.
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
            👥
          </div>

          <h2>Clubs</h2>

          <p>
            Clubs registered on CampusConnect will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Clubs