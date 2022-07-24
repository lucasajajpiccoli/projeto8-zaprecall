import React from 'react';

import Welcome from "./Welcome";
import Main from "./Main";

import "../assets/css/reset.css";
import "../assets/css/style.css";

function App() {
    const [screen, setScreen] = React.useState("welcome");
    return (
        <>
            {screen === "welcome" ? <Welcome setScreen={setScreen} /> : <Main />}
        </>
    );
}

export default App;