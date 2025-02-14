// Importing React hooks and PropTypes for prop validation
import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

// Creating a context to manage and share user data across the application
const UserContext = createContext()

// Custom hook to easily access the UserContext in any component
export const useUser = () => {
  // The useContext hook allows us to read and subscribe to the context
  return useContext(UserContext)
}

// UserProvider component that will be used to wrap the app
// This component provides the user data to all components inside it
export const UserProvider = ({ children }) => {
  // useState hook to hold the current userId, initially set to null
  const [userId, setUserId] = useState(null)

  // UserContext.Provider makes the userId and setUserId available
  // to all child components
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {/* The children prop represents the components inside UserProvider */}
      {children}
    </UserContext.Provider>
  )
}

// PropTypes are used to validate that the 'children' prop is correctly passed
// 'children' must be a valid React node (such as a component, element, or string)
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // children is required and must be a valid React element
}