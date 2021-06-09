import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {GetAppRounded} from "@material-ui/icons";
import ForumIcon from '@material-ui/icons/Forum';
import GroupIcon from '@material-ui/icons/Group';
import StarIcon from '@material-ui/icons/Star';
import Badge from "@material-ui/core/Badge";
import {BrowserRouter, Link} from "react-router-dom";

const MainColor = "";
const useStyles = makeStyles((theme) => ({
    logoContainer: {
        flexDirection: "row",
        display: "flex"
    },
    title: {
        fontSize: "18px",
        marginTop: theme.spacing(1.4),
        color: "white",
        textShadow: "black 2px 2px 2px"
    },
    menuButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "30px",
        marginLeft: theme.spacing(0)
    }
    ,
    list: {
        width: 250,
    }
    ,
    fullList: {
        width: 'auto',
    }
    ,
}));
const hrefs = ["/all_messages", "/common", "/groups", "/favorite"]
const items = ['Все сообщения', 'Общий чат', 'Групповые чаты', 'Избранное'];
let cur = 0;
const notification_count = {
    all: 5,
    common: 3,
    groups: 10,
    favorite: 3,
    alerts: 5
};

function GetNotification(text) {
    let count = 0;
    switch (text) {
        case items[0]:
            count = notification_count.all;
            break;
        case items[1]:
            count = notification_count.common;
            break;
        case items[2]:
            count = notification_count.groups;
            break;
        case items[3]:
            count = notification_count.favorite;
            break;
        default:
            count = 1;
            break;
    }
    return count;

}

function GetIcon(text) {
    switch (text) {
        case items[0]:
            return (<MessageIcon/>);
        case items[1]:
            return (<ForumIcon/>);
        case items[2]:
            return (<GroupIcon/>);
        case items[3]:
            return (<StarIcon/>);
        default:
            return (<InboxIcon/>);
    }

}

export default function Sidepanel(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {console.log(cur = 0)}
                {items.map((text, index) => (
                    <ListItem component={Link} to={hrefs[cur++]} button key={text}>
                        <ListItemIcon>{
                            GetIcon(text)
                        }</ListItemIcon>
                        <ListItemText primary={text}/>
                        <Badge badgeContent={GetNotification(text)} color="error">

                        </Badge>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Уведомления'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><NotificationsIcon/></ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const anchor = "left";
    return (
        <div>
            <React.Fragment key={anchor}>
                <Container className={classes.logoContainer}>
                    <IconButton onClick={toggleDrawer(anchor, true)}
                                edge="start" className={classes.menuButton}
                                color={MainColor} aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <h1 className={classes.title}>
                        AQMessendger
                    </h1>
                </Container>

                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

