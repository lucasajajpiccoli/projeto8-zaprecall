import React from 'react';

import Header from "./Header";
import Questions from "./Questions";
import Footer from "./Footer";

const deck = [{
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript"
},
{
    question: "O React é...",
    answer: "uma biblioteca JavaScript para construção de interfaces"
},
{
    question: "Componentes devem iniciar com...",
    answer: "letra maiúscula"
},
{
    question: "Podemos colocar ... dentro do JSX",
    answer: "expressões"
},
{
    question: "O ReactDOM nos ajuda...",
    answer: "interagindo com a DOM para colocar componentes React na mesma"
},
{
    question: "Usamos o npm para...",
    answer: "gerenciar os pacotes necessários e suas dependências"
},
{
    question: "Usamos props para...",
    answer: "passar diferentes informações para componentes "
},
{
    question: "Usamos estado (state) para...",
    answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
}];

deck.sort(() => Math.random() - 0.5);

function Main() {
    const [iconsAnswered, setIconsAnswered] = React.useState([]);

    return (
        <div className="main">
            <Header />
            <Questions deck={deck} iconsAnswered={iconsAnswered} setIconsAnswered={setIconsAnswered} />
            <Footer iconsAnswered={iconsAnswered} deckLength={deck.length} />
        </div>
    );
}

export default Main;