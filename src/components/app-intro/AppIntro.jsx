import React from "react";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import "./List.css"

const useStyles = makeStyles((theme) => ({
    main: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        background: "#0360c1",

    },
    h1: {
        color: "#CEF0D4",
        fontFamily: "fantasy",
        fontSize: "30px",
        fontWeight: "normal",
        lineHeight: "48px",
        margin: "0 0 50px",
        textAlign: "center",
        textShadow: "1px 1px 2px #082b34"
    },
    h2: {
        color: "#a7e8f8",
        fontFamily: "monospace",
        fontSize: "27px",
        fontWeight: "bold",
        lineHeight: "32px",
        margin: "0 0 24px",
        textShadow: "1px 1px 1px #082b34"
    },
    p: {
        color: "#FFFFFF",
        fontFamily: "monospace",
        fontSize: "23px",
        lineHeight: "24px",
        margin: "0 0 24px"
    },
    a: {color: "#CEF0D4", textDecoration: "underline"},

    navLink: {
        textDecoration: "none",
        backgroundColor: "#6A5ACD",
        color: "#E0FFFF",
        padding: "3px"
    },
    avatar: {
        borderRadius: "50%"
    },
    logoWrapper: {
        display: "flex",
        flexDirection: "row"
    }
}));

export function AppIntro() {
    const Style = useStyles();
    return (<
        Paper className={Style.main}>
        <h2 className={Style.h2}>Мессенджер - средство текстовой связи между сотрудниками!</h2>
        <div className={Style.logoWrapper}>
            <img className={Style.avatar}
                 src="https://www.searchpng.com/wp-content/uploads/2019/04/messenger-icon-Button-PNG-Image.png"
                 height={200} width={200}></img>
            <h2  style={{marginTop:"65px"}}  className={Style.h2}>Эффективность и удобство это про AQMessendger.</h2>
        </div>
        <p class={Style.p}>Каждый день мы работаем над какой-нибудь задачей вместе, нам необходимо
            взаимодействовать.</p>
        <p class={Style.p}>Чем более эффективно это происходит, тем более успешны вы в своих проектах.</p>
        <p class={Style.p}> Ведь, согласитесь очень удобно в одном месте, под рукой иметь список необходимых
            контактов.</p>
        <p class={Style.p}> Общаться только по деловым вопросам, не отвлекаясь от важных дел, да к тому же вы можете
            давать разработчикам
            обратную связь.</p>
        <p class={Style.p}>Просто опишите проблему и предложите ваше виденье решения данного казуса.</p>
        <p class={Style.p}>Я очень ценю и уважаю тебя, мой пользователь!</p>
        <p class={Style.p}>Предлагаую ознакомиться со списком возможностей:</p>
        <ul className={"older"}>
            <li><p class={Style.p}>Регистрация на сайте:<Link
                className={Style.navLink}
                to="/auth">Регистрация</Link>
            </p></li>
            <li><p class={Style.p}>Поиск работника по катологу:<Link className={Style.navLink} to="/users">Поиск
                работников</Link>
            </p></li>
            <li><p class={Style.p}>Просмотреть все входящие сообщения:<Link className={Style.navLink}
                                                                            to="/all_messages">Просмотр
                сообщений</Link></p></li>
            <li><p class={Style.p}>Изменить данные профиля:<Link className={Style.navLink} to="/profile">Редактирование
                анкеты</Link>
            </p></li>
        </ul>
        <p className={Style.p}>Все изменения в работе сайта и информация об обнавлениях также будет распологаться здесь.
            Прятного пользования сайтом!</p>
    </Paper>);
}