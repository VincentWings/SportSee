import { useUser } from "../../context/UserContext" // Importing the custom hook for accessing user context
import { Link, Navigate } from "react-router-dom" // Importing navigation components from react-router-dom
import "./Navbar.css" // Importing CSS styles for the navbar

function Navbar() {
    // Get userId from the context
    const { userId } = useUser()

    // If userId is undefined, redirect to homepage
    if (userId === undefined) {
        console.error("UserContext is missing or userId is undefined.")
        return null; // Prevents rendering if userId is missing
    }

    return (
        <nav className="navbar">
            <ul>
                {/* Link to homepage */}
                <li><Link to="/">Accueil</Link></li>

                {/* Link to user's profile, only if userId exists */}
                <li><Link to={`/user/${userId}`}>Profil</Link></li>

                {/* Link to settings page */}
                <li><Link to="/settings">Réglages</Link></li>

                {/* Link to community page */}
                <li><Link to="/community">Communauté</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar