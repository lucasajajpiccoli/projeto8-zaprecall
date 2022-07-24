import logo from "../assets/img/logo.png";

function Welcome({setScreen}) {
    return (
        <div className="welcome">
            <img src={logo} alt="logo" />
            <div>ZapRecall</div>
            <div onClick={() => setScreen("main")}>Iniciar Recall!</div>
        </div>
    );
}

export default Welcome;