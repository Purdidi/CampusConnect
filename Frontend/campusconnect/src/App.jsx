
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import ForgotPassword from './pages/ForgotPassword'
import EventRequests from './pages/EventRequests'
import Events from './pages/Events'
import Clubs from './pages/Clubs'
import Reports from './pages/Reports'
import Organizers from './pages/Organizers'
import Users from './pages/Users'
import Settings from './pages/Settings'
import './App.css'


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

<Route
  path="/event-requests"
  element={<EventRequests />}
/>
<Route
  path="/events"
  element={<Events />}
/>
<Route
  path="/clubs"
  element={<Clubs />}
/>
<Route
  path="/reports"
  element={<Reports />}
/>
<Route
  path="/organizers"
  element={<Organizers />}
/>
<Route
  path="/users"
  element={<Users />}
/>
<Route
  path="/settings"
  element={<Settings />}
/>
      </Routes>
      

    </BrowserRouter>
  )
}

export default App