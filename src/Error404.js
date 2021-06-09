import './components/Err404.css'
import {Link} from "react-router-dom";

export default function Error404(props) {
    return (
        <div className={"wrapper"}>
            <div className="mainbox">
                <h2 align={"center"}>{props?.title}</h2>
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Возможно ресурс был премещён? Удалён? Прячется где-нибудь? А возможно никогда и не
                    существовал?<p>Давайте вернёмся на <Link to={"/main"}>домашнюю</Link> страницу
                        и попробуем начать поиск оттуда...</p></div>
            </div>
        </div>);
}