import React from 'react';
import Dialogs from '../../JSONData/UserDialogs.json';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import giveDate from "../../functions/giveDate";
import MessageList from "./inputmessage/MessageList";
import InputMessage from "./messagelist/InputMessage";


const useStyles = makeStyles((theme) => ({
    DialogMain: {
        color: "white"
    },
}));
function arrayRand(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
const senders = ["Владимир Гашин", "Илья Маркин"];
let Messages = [
    {
        m_sender: arrayRand(senders),
        m_text: "Привет",
        m_date: "11:00"
    },
    {
        m_sender: arrayRand(senders),
        m_text: "Как дела с рабочим проектом?",
        m_date: "11:02"
    },
    {
        m_sender: arrayRand(senders),
        m_text: "Почти готов, остались последние штрихи.",
        m_date: "11:13"
    },
    {
        m_sender: arrayRand(senders),
        m_text: "А как с документацией?",
        m_date: "11:16"
    },
    {
        m_sender: arrayRand(senders),
        m_text: "Всё в порядке, заканчиваю оформление, к понедельнику будет готова.",
        m_date: "11:20"
    },
    {
        m_sender: arrayRand(senders),
        m_text: "Удачи в работе, до встречи.",
        m_date: "11:31"
    },

]
export function AddMessage(message){
    Messages.push(message);
    console.log(Messages);
}
export default function Dialog() {
    const classes = useStyles();
    return (
        <div className={classes.DialogMain}>
            <CssBaseline/>
            <MessageList Messages={Messages} senders={senders}/>
            <InputMessage/>
        </div>
    );
}