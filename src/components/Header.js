import "../assets/css/header.css"

import small_logo from "../assets/img/small-logo.png";

function Header() {
    return (
        <div className="header">
            <img src={small_logo} alt="logo" />
            <div>ZapRecall</div>
        </div>
    );
}

export default Header;