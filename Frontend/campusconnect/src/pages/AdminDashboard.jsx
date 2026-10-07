import { Link } from 'react-router-dom'
function AdminDashboard() {

  return (
    <div className="admin-layout">

      {/* Sidebar */}

      <aside className="admin-sidebar">

        <div className="sidebar-logo">
          CampusConnect
        </div>

        <p className="sidebar-role">
          Admin Panel
        </p>

        <nav className="sidebar-menu">

          <a href="#" className="active">
            Dashboard
          </a>

          <Link
  to="/event-requests"
  className="sidebar-link"
>
  Event Requests
</Link>

          <Link
  to="/events"
  className="sidebar-link"
>
  Events
</Link>

        <Link
  to="/clubs"
  className="sidebar-link"
>
  Clubs
</Link>
<Link
  to="/organizers"
  className="sidebar-link"
>
  Organizers
</Link>

         <Link
  to="/users"
  className="sidebar-link"
>
  Users
</Link>
<Link
  to="/reports"
  className="sidebar-link"
>
  Reports
</Link>
         <Link
  to="/settings"
  className="sidebar-link"
>
  Settings
</Link>

        </nav>

        <div className="sidebar-bottom">

          <a href="#">
            Settings
          </a>

         <Link
  to="/login"
  className="sidebar-link"
>
  Logout
</Link>

        </div>

      </aside>


      {/* Main Content */}

      <main className="admin-main">

        {/* Top Header */}

        <header className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>

            <p>
              Manage and monitor CampusConnect activities.
            </p>
          </div>

          <div className="admin-profile">

            <div className="notification">
              🔔
            </div>

            <div className="profile-avatar">
              A
            </div>

            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>

          </div>

        </header>


        {/* Statistics */}

        <section className="dashboard-cards">

          <div className="dashboard-card">

            <div className="card-icon">
              📅
            </div>

            <div>
              <p className="card-title">
                Upcoming Events
              </p>

              <h2>
                12
              </h2>

              <span className="card-info">
                Events scheduled
              </span>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              ⏳
            </div>

            <div>
              <p className="card-title">
                Pending Requests
              </p>

              <h2>
                5
              </h2>

              <span className="card-info">
                Need your review
              </span>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              👥
            </div>

            <div>
              <p className="card-title">
                Active Clubs
              </p>

              <h2>
                18
              </h2>

              <span className="card-info">
                Active communities
              </span>
            </div>

          </div>


          <div className="dashboard-card">

            <div className="card-icon">
              🎓
            </div>

            <div>
              <p className="card-title">
                Registrations
              </p>

              <h2>
                245
              </h2>

              <span className="card-info">
                Student registrations
              </span>
            </div>

          </div>

        </section>


        {/* Main Dashboard Grid */}

        <section className="dashboard-grid">

          {/* Pending Requests */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>
                  Pending Event Requests
                </h2>

                <p>
                  Review recently submitted events.
                </p>
              </div>

              <button className="view-button">
                View All
              </button>

            </div>


            <div className="request-item">

              <div className="event-icon">
                🎤
              </div>

              <div className="request-info">

                <h3>
                  Tech Innovation Summit
                </h3>

                <p>
                  Submitted by Coding Club
                </p>

              </div>

              <span className="pending-badge">
                Pending
              </span>

            </div>


            <div className="request-item">

              <div className="event-icon">
                💻
              </div>

              <div className="request-info">

                <h3>
                  Web Development Workshop
                </h3>

                <p>
                  Submitted by Tech Society
                </p>

              </div>

              <span className="pending-badge">
                Pending
              </span>

            </div>


            <div className="request-item">

              <div className="event-icon">
                🎨
              </div>

              <div className="request-info">

                <h3>
                  Design Challenge
                </h3>

                <p>
                  Submitted by Design Club
                </p>

              </div>

              <span className="pending-badge">
                Pending
              </span>

            </div>

          </div>


          {/* Quick Actions */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>
                <h2>
                  Quick Actions
                </h2>

                <p>
                  Manage CampusConnect quickly.
                </p>
              </div>

            </div>


            <div className="quick-actions">

             <Link
  to="/event-requests"
  className="quick-action-button"
>
  <span>📋</span>
  Review Requests
</Link>

             <Link
  to="/events"
  className="quick-action-button"
>
  <span>📅</span>
  Manage Events
</Link>

              <Link
  to="/clubs"
  className="quick-action-button"
>
  <span>👥</span>
  Manage Clubs
</Link>

              <Link
  to="/reports"
  className="quick-action-button"
>
  <span>📊</span>
  View Reports
</Link>

            </div>

          </div>

        </section>


        {/* Recent Activity */}

        <section className="dashboard-panel activity-panel">

          <div className="panel-header">

            <div>
              <h2>
                Recent Activity
              </h2>

              <p>
                Latest activities across CampusConnect.
              </p>
            </div>

          </div>


          <div className="activity-item">

            <span className="activity-dot"></span>

            <div>
              <strong>
                New event request received
              </strong>

              <p>
                Tech Innovation Summit was submitted for approval.
              </p>
            </div>

            <small>
              10 min ago
            </small>

          </div>


          <div className="activity-item">

            <span className="activity-dot"></span>

            <div>
              <strong>
                New club registered
              </strong>

              <p>
                Robotics Club joined CampusConnect.
              </p>
            </div>

            <small>
              1 hour ago
            </small>

          </div>


        </section>

      </main>

    </div>
  )
}

export default AdminDashboard