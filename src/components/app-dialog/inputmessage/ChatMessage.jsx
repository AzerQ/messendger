import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Container from "@material-ui/core/Container";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    Container: {
        background: "yellow",
        color: "black",
        width: "auto",
    },
    chat_message: {
        display: "flex",
        alignItems: "center",
        marginRight: "10px",
        marginBottom: "10px"
    },
    chat_message_text: {
        borderRadius: "20px",
        padding: "7px",
        display: "inline-block",
        marginLeft: "5px"
    },
    other_text: {
        backgroundColor: "#cccccc",
    },
    your_text: {
        backgroundColor: "lightgreen",
    },
    chat_message_time: {
        color: "black",
        padding: "2px"
    }
}));

export default function ChatMessage(props) {
    const classes = useStyles();
    return (
        <Container className={classes.chat_message}>
            <div
                className={classes.chat_message_time}>
                {(props.createdTime !== undefined) ? props.createdTime : "00:00"}</div>
            <div
                className={classes.chat_message_text} style={(props.owner == "you")?{backgroundColor: "lightgreen"}:{ backgroundColor: "#ccc"}}
            >
                {(props.itemText !== undefined) ? props.itemText : "No text"}</div>
        </Container>
    );
}
