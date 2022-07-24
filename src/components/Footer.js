import "../assets/css/footer.css"

import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png"

function End({ img, alt, status, message }) {
    return (
        <>
            <div className="result_status">
                <img src={img} alt={alt} />
                <span>{status}</span>
            </div>
            <div className="result_message">{message}</div>
        </>
    );
}

function Footer({ iconsAnswered, deckLength }) {
    let resultAchieved;
    let resultJSX = "";
    const resultContent = {
        success: {
            img: party,
            alt: "party",
            status: "Parabéns!",
            message: "Você não esqueceu de nenhum flashcard!"
        },
        fail: {
            img: sad,
            alt: "sad",
            status: "Putz...",
            message: "Ainda faltam alguns... Mas não desanime!"
        }
    }

    if (iconsAnswered.length === deckLength) {
        if (iconsAnswered.includes("close-circle")) {
            resultAchieved = resultContent.fail;
        } else {
            resultAchieved = resultContent.success;
        }
        resultJSX = (
            <End
                img={resultAchieved.img}
                alt={resultAchieved.alt}
                status={resultAchieved.status}
                message={resultAchieved.message}
            />
        );
    }

    return (
        <div className="footer">
            {resultJSX}
            <div className="concluded">{iconsAnswered.length}/{deckLength} CONCLUÍDOS</div>
            <div className="result_icons">
                {iconsAnswered.map(icon => <ion-icon name={icon}></ion-icon>)}
            </div>
        </div>
    );
}

export default Footer;