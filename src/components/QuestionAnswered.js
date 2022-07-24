import "../assets/css/questionAnswered.css"

function QuestionAnswered({answer_text, toUpdate, statusList, iconsAnswered, setIconsAnswered}) {
    return (
        <div className="question answered">
            <span>{answer_text}</span>
            <div className="answered-buttons">
                <div onClick={() => {toUpdate({...statusList[3]}); setIconsAnswered([...iconsAnswered, "close-circle"])}}>Não lembrei</div>
                <div onClick={() => {toUpdate({...statusList[4]}); setIconsAnswered([...iconsAnswered, "help-circle"])}}>Quase não lembrei</div>
                <div onClick={() => {toUpdate({...statusList[5]}); setIconsAnswered([...iconsAnswered, "checkmark-circle"])}}>Zap!</div>
            </div>
        </div>
    );
}

export default QuestionAnswered;