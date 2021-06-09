import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../app-header/Header";
import Chats from "../app-chats/Chats";
import PropertiesView from "../app-propertiesbar/PropertiesView";
import Dialog from "../app-dialog/Dialog";
import Auth from "../app-auth/Auth";
import NewProfile from "../app-newprofile/NewProfile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SwitchBase from "@material-ui/core/internal/SwitchBase";
import Users from "../app-users/Users";
import FullUserCard from "../app-usercard/FullUserCard";
import {AppIntro} from "../app-intro/AppIntro";

let CurrentTitle = '';
let ContentID = 0;
let ContentTitles = ["Все сообщения", "Диалог", "Авторизация и регистрация", "Ввод данных о пользователе", "Главная", "Настройки",
    "Оставьте отзыв",
    "Напишите разработчику",
    "Служба поддержки",
    "Найденные пользователи",
    "Карточка сотрудника"];
let ContentElements = [Chats, Dialog, Auth, NewProfile, Users, FullUserCard];
const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        background: "#ffffff",
        marginTop: theme.spacing(4),
        marginLeft: "auto",
        marginRight: "auto",
        border: "3px ridge #0572cb",
    },
    inner: {
        width: "100%"
    }

}));

function GetContent(props) {
    let El = ContentElements[props.id];
    return (
        <El/>
    );
}

export default function Main() {
    const classes = useStyles();
    ContentID = 2;
    return (
        <div className={classes.main}>

            <Route path={"/all_messages"}>
                <PropertiesView Title={ContentTitles[0]}/>
                <Container className={classes.inner}>
                    <GetContent id={0}/>
                </Container>
            </Route>
            <Route path={"/dialog"}>
                <PropertiesView Title={ContentTitles[1]}/>
                <Container className={classes.inner}>
                    <GetContent id={1}/>
                </Container>
            </Route>
            <Route path={"/auth"}>
                <PropertiesView Title={ContentTitles[2]}/>
                <Container className={classes.inner}>
                    <GetContent id={2}/>
                </Container>
            </Route>
            <Route path={"/profile"}>
                <PropertiesView Title={ContentTitles[3]}/>
                <Container className={classes.inner}>
                    <GetContent id={3}/>
                </Container>
            </Route>
            <Route path={"/(main|)/"}>
                <PropertiesView Title={ContentTitles[4]}/>
                <Container className={classes.inner}>
                   <AppIntro/>
                </Container>
            </Route>
            <Route path={"/settings"}>
                <PropertiesView Title={ContentTitles[5]}/>
                <Container className={classes.inner}>
                    Settings
                </Container>
            </Route>
            <Route path={"/chatdev"}>
                <PropertiesView Title={ContentTitles[6]}/>
                <Container className={classes.inner}>
                    ChatDev
                </Container>
            </Route>
            <Route path={"/feedback"}>
                <PropertiesView Title={ContentTitles[7]}/>
                <Container className={classes.inner}>
                    FeedBack
                </Container>
            </Route>
            <Route path={"/support"}>
                <PropertiesView Title={ContentTitles[8]}/>
                <Container className={classes.inner}>
                    Support
                </Container>
            </Route>
            <Route path={"/users"}>
                <PropertiesView Title={ContentTitles[9]}/>
                <Container className={classes.inner}>
                    <GetContent id={4}/>
                </Container>
            </Route>
            <Route path={"/user/:id"}
                   render={(props) => <div><PropertiesView Title={ContentTitles[10]}/> <FullUserCard {...props}/>
                   </div>}>
            </Route>
        </div>

    )
        ;
}