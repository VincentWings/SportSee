import iconCycling from "../../assets/images/icon-cycling.svg";
import iconSwimming from "../../assets/images/icon-swimming.svg";
import iconWorkout from "../../assets/images/icon-workout.svg";
import iconYoga from "../../assets/images/icon-yoga.svg";
import "./Sidebar.css";

function Sidebar() {
    const currentYear = new Date().getFullYear();

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="/" target="_blank">
                        <img src={iconYoga} className="icon" alt="Yoga" />
                    </a>
                </li>

                <li>
                    <a href="/" target="_blank">
                        <img src={iconSwimming} className="icon" alt="Swimming" />
                    </a>
                </li>

                <li>
                    <a href="/" target="_blank">
                        <img src={iconCycling} className="icon" alt="Cycling" />
                    </a>
                </li>

                <li>
                    <a href="/" target="_blank">
                        <img src={iconWorkout} className="icon" alt="Workout" />
                    </a>
                </li>
            </ul>

            <div className="copyright">Copyright, SportSee {currentYear}</div>
        </aside>
    );
}

export default Sidebar;
