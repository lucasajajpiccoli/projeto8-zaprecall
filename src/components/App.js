import React from 'react';

function App() {
    const [screen, setScreen] = React.useState(2);

    function alternateScreen() {
        setScreen(3 - screen);
    }

    return (
        <>
            {screen === 1 ? (
                <div className="welcome" onClick={alternateScreen}>
                    <img src="./img/logo.png" alt="logo" />
                    <div>ZapRecall</div>
                    <div>Iniciar Recall!</div>
                </div>) :
                (<div className="main" onClick={alternateScreen}>
                    <div className="top">
                        <img src="./img/small-logo.png" alt="logo" />
                        <div>ZapRecall</div>
                    </div>
                    <div clasName="questions">
                        <div className="question opened">
                            <span>Componentes devem iniciar com ...</span>
                            <img src="./img/small-arrow.svg" alt="small-arrow" />
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
            <div className="bottom">
                
            </div>
        </>
    );
}

export default App;