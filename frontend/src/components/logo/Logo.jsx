import { NavLink } from "react-router-dom"
import sportseeLogo from "../../assets/images/sportsee.svg"
import "./Logo.css"

function Logo() {
    return (
        <div className="logo">
            <NavLink to="/">
                <img src={sportseeLogo} className="logo" alt="SportSee logo" />
            </NavLink>
        </div>
    )
}

export default Logo