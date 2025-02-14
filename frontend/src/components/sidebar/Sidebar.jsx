import { Link } from "react-router-dom" // Importing Link for navigation
import iconCycling from "../../assets/images/icon-cycling.svg" // Importing cycling icon
import iconSwimming from "../../assets/images/icon-swimming.svg" // Importing swimming icon
import iconWorkout from "../../assets/images/icon-workout.svg" // Importing workout icon
import iconYoga from "../../assets/images/icon-yoga.svg" // Importing yoga icon

import "./Sidebar.css" // Importing sidebar CSS styles

function Sidebar() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear()

  // Sidebar component render
  return (
    <aside className="sidebar">
      {/* Sidebar menu with activity links */}
      <ul>
        {/* Link for Yoga activity */}
        <li>
          <Link to="/">
            <img src={iconYoga} className="icon" alt="Yoga" />
          </Link>
        </li>

        {/* Link for Swimming activity */}
        <li>
          <Link to="/">
            <img src={iconSwimming} className="icon" alt="Swimming" />
          </Link>
        </li>

        {/* Link for Cycling activity */}
        <li>
          <Link to="/">
            <img src={iconCycling} className="icon" alt="Cycling" />
          </Link>
        </li>

        {/* Link for Workout activity */}
        <li>
          <Link to="/">
            <img src={iconWorkout} className="icon" alt="Workout" />
          </Link>
        </li>
      </ul>

      {/* Footer with copyright */}
      <footer className="copyright">
        Copyright, SportSee {currentYear}
      </footer>
    </aside>
  )
}

export default Sidebar