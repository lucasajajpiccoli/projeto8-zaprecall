import Question from "./Question";

import "../assets/css/questions.css"

function Questions({deck, iconsAnswered, setIconsAnswered}) {
    return (
        <div clasName="questions">
            {deck.map((flashcard, index) => <Question
                question_text={flashcard.question}
                answer_text={flashcard.answer}
                position={index+1}
                iconsAnswered={iconsAnswered}
                setIconsAnswered={setIconsAnswered}
            />)}
        </div>
    );
}

export default Questions;