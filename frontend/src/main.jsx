// Importing necessary React libraries to use JSX and manage the DOM
import React from "react"
import ReactDOM from "react-dom/client" // React 18+ requires createRoot for rendering
import AppRouter from "./AppRouter" // Handles routing in the app
import { UserProvider } from "./context/UserContext" // Provides user context throughout the app

// Importing global styles
import './main.css'

// Get the root element from the HTML file where the app will be rendered
const rootElement = document.getElementById("root")

// Create a root element using ReactDOM's createRoot (recommended for React 18+)
// This allows us to leverage React's new concurrent features
const root = ReactDOM.createRoot(rootElement)

// Render the app into the root element
root.render(
  <React.StrictMode>
    {/* Wrapping the AppRouter with UserProvider to make user data available across all components */}
    <UserProvider>
      <AppRouter /> {/* AppRouter handles all routing for the app */}
    </UserProvider>
  </React.StrictMode>
)