import "../assets/css/questionOpened.css"

import small_arrow from "../assets/img/small-arrow.svg";

function QuestionOpened({ question_text, toUpdate, statusList }) {
    return (
        <div className="question opened">
            <span>{question_text}</span>
            <img src={small_arrow} alt="small-arrow" onClick={() => toUpdate({...statusList[2]})}/>
        </div>
    );
}

export default QuestionOpened;