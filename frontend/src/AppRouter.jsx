// Importing necessary libraries for routing and component structure
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout" // Layout component for the main structure
import Homepage from "./pages/homepage/Homepage" // Homepage component
import Dashboard from "./components/dashboard/Dashboard" // Dashboard for user profile
import Settings from "./pages/settings/Settings" // Settings page
import Community from "./pages/community/Community" // Community page
import PageNotFound from "./pages/404/PageNotFound" // Page not found for unknown routes

// AppRouter component handles the routing logic
const AppRouter = () => {
  return (
    // BrowserRouter wraps the entire application for routing
    <BrowserRouter>
      {/* Routes container for defining all the different paths */}
      <Routes>
        {/* The root route, used to define the layout for the app */}
        <Route path="/" element={<Layout />}>
          {/* Default route, loads the homepage */}
          <Route index element={<Homepage />} />

          {/* Dynamic route for a user profile with a dynamic ID parameter */}
          <Route path="/user/:id" element={<Dashboard />} />

          {/* Static route for the settings page */}
          <Route path="settings" element={<Settings />} />

          {/* Static route for the community page */}
          <Route path="community" element={<Community />} />

          {/* Fallback route for any unknown paths */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter