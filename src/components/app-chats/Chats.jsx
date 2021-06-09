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
import {Link} from "react-router-dom";
import {workers} from "../app-users/Users";

const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    unseen: {
        marginRight: theme.spacing(4),
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        marginTop: theme.spacing(2),
        width: "100%",
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function Chats() {
    let i = 0;
    const classes = useStyles();
    console.log(Dialogs.dialogs[0].name);
    const dialogs = Dialogs.dialogs;
    let groupIcon = <PeopleIcon fontSize="small"/>;
    let personIcon = <PersonIcon fontSize="small"/>;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                </Typography>
                <List className={classes.list}>
                    {dialogs.map(({id, name, last_message, icon, type, unseen_messages}) => (
                        <React.Fragment key={id}>
                            <ListItem component={Link} to = "/dialog" button>
                                <ListItemAvatar>
                                    <Avatar alt={name} src={workers[i++].photo}/>
                                </ListItemAvatar>
                                <ListItemIcon>
                                    {(type === "user") ? personIcon : groupIcon}
                                </ListItemIcon>
                                <ListItemText primary={name}
                                              secondary={last_message.text}>
                                </ListItemText>
                                <div className={classes.unseen}>{giveDate(last_message.date)}</div>
                                <Badge badgeContent={unseen_messages} color="error">
                                </Badge>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
}