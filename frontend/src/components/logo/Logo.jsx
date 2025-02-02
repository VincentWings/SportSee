import sportseeLogo from "../../assets/images/sportsee.svg";
import "./Logo.css";

function Logo() {
    return (
        <div className="logo">
            <a href="/" target="_blank">
                <img src={sportseeLogo} className="logo" alt="SportSee logo" />
            </a>
        </div>
    );
}

export default Logo;
