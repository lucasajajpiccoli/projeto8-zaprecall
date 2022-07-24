import React from 'react';

import QuestionOpened from "./QuestionOpened";
import QuestionAnswered from "./QuestionAnswered";



function Question({ question_text, answer_text, position, iconsAnswered, setIconsAnswered }) {
    const statusList = [{
        status: "not_clicked",
        classText: "question",
        icon: "play-outline"
    },
    {
        status: "opened"
    },
    {
        status: "answered"
    },
    {
        status: "forgotten",
        classText: "question forgotten",
        icon: "close-circle"
    },
    {
        status: "almost_forgotten",
        classText: "question almost-forgotten",
        icon: "help-circle"
    },
    {
        status: "remembered",
        classText: "question remembered",
        icon: "checkmark-circle"
    }]

    const [questionStatus, setQuestionStatus] = React.useState(statusList[0]);

    function advanceStep () {
        if (questionStatus.status === "not_clicked") {
            setQuestionStatus({...statusList[1]});
        }
    }

    if (["not_clicked", "forgotten", "almost_forgotten", "remembered"].includes(questionStatus.status)) {
        return (
            <div className={questionStatus.classText} onClick={advanceStep}>
                <span>Pergunta {position}</span>
                <ion-icon name={questionStatus.icon}></ion-icon>
            </div>
        );
    } else if (questionStatus.status === "opened") {
        return (
            <QuestionOpened question_text={question_text} toUpdate={setQuestionStatus} statusList={statusList} />
        );
    } else {
        return (
            <QuestionAnswered
                answer_text={answer_text}
                toUpdate={setQuestionStatus}
                statusList={statusList}
                iconsAnswered={iconsAnswered}
                setIconsAnswered={setIconsAnswered}
            />
        );
    }
}

export default Question;