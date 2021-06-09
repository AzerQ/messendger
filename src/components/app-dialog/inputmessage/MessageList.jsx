import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import ChatMessage from "./ChatMessage";
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    Container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: "5px",
        border: "3px ridge #0572cb",
        background: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
    },
    ChatHeader: {
        textAlign: "center",
    },
    chat_item: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    chat_person_avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    },
    chat_messages: {
        marginLeft: "10px"
    },
    chat_responder_mess: {
        flexDirection: "row-reverse",
    },
    chat_responder_cont: {
        marginLeft: 0,
        marginRight: "5px"
    },
    avatar: {
        borderRadius: "50%"
    }
}));


export default function MessageList(props) {
    const [senders, setSenders] = React.useState(props.senders);
    const [Messages, setMessages] = React.useState(props.Messages);
    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <h1 className={classes.ChatHeader}>Диалог с {senders[1]}</h1>
            <div align="center">
                <Link to="/user/1">
                    <img className={classes.avatar}
                         src="https://profile-images.xing.com/images/963972ae7bb357fd1fec41cc136de1e7-6/moritz-kaiser.1024x1024.jpg"
                         height={150} width={150}></img>
                </Link>
            </div>
            <Container className={classes.chat_item}>
                {/*<img className={classes.chat_person_avatar} src="http://placekitten.com/40/50" alt="photo"/>Игорь*/}
                <Container className={classes.chat_messages}>
                    {
                        Messages.map(({m_sender, m_text, m_date}) =>
                            <ChatMessage createdTime={m_date} itemText={m_text}
                                         owner={(m_sender == senders[0]) ? "you" : "no"}/>
                        )
                    }
                </Container>
            </Container>
        </Container>
    );
}

