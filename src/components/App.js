import React from 'react';

import "../assets/css/reset.css";
import "../assets/css/style.css";

import logo from "../assets/img/logo.png";
import small_logo from "../assets/img/small-logo.png";
import small_arrow from "../assets/img/small-arrow.svg";
import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png"

function App() {
    const [screen, setScreen] = React.useState(2);

    function alternateScreen() {
        setScreen(3 - screen);
    }

    return (
        <>
            {screen === 1 ? (
                <div className="welcome" onClick={alternateScreen}>
                    <img src={logo} alt="logo" />
                    <div>ZapRecall</div>
                    <div>Iniciar Recall!</div>
                </div>) :
                (<div className="main" onClick={alternateScreen}>
                    <div className="header">
                        <img src={small_logo} alt="logo" />
                        <div>ZapRecall</div>
                    </div>
                    <div clasName="questions">
                        <div className="question opened">
                            <span>Componentes devem iniciar com ...</span>
                            <img src={small_arrow} alt="small-arrow" />
                        </div>
                        <div className="question answered">
                            <span>dizer para o React quais informações quando atualizadas devem renderizar a tela novamente</span>
                            <div className="answered-buttons">
                                <div>Não lembrei</div>
                                <div>Quase não lembrei</div>
                                <div>Zap!</div>
                            </div>
                        </div>
                        <div className="question forgotten">
                            <span>Pergunta 3</span>
                            <ion-icon name="close-circle"></ion-icon>
                        </div>
                        <div className="question almost-forgotten">
                            <span>Pergunta 4</span>
                            <ion-icon name="help-circle"></ion-icon>
                        </div>
                        <div className="question remembered">
                            <span>Pergunta 5</span>
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                        <div className="question">
                            <span>Pergunta 6</span>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                        <div className="question">
                            <span>Pergunta 7</span>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                        <div className="question">
                            <span>Pergunta 8</span>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </div>
                </div>)}
            <div className="footer">
                <div className="result_status">
                    <img src={party} alt="party" />
                    <span>Parabéns!</span>
                </div>
                <div className="result_message">Você não esqueceu de nenhum flashcard!</div>
                <div className="concluded">0/8 CONCLUÍDOS</div>
                <div className="result_icons">
                    <ion-icon name="help-circle"></ion-icon>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            </div>
        </>
    );
}

export default App;