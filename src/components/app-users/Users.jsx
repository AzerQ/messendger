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
import UserCard from "./UserCard/UserCard";
import {getQueryParams} from "../../functions/getQueryParams";

export const workers = [
    {
        photo: "https://profile-images.xing.com/images/963972ae7bb357fd1fec41cc136de1e7-6/moritz-kaiser.1024x1024.jpg",
        id: 1,
        firstname: 'Илья',
        secondname: "Маркин",
        thirdname: 'Алексеевич',
        age: 23,
        department: "Машиностроение",
        position: "Инжинер"
    },
    {
        photo: "https://www.obrazilla.ru/wp-content/uploads/2017/03/accountant136.jpg",
        id: 2,
        firstname: 'Андрей',
        secondname: "Ломакин",
        thirdname: 'Витальевич',
        age: 35,
        department: "Бухгалтерия",
        position: "Главный бухгалтер"
    },
    {
        photo: "https://31.img.avito.st/image/1/SqHga7aB5kiWzhRO-CoIzQfI4k5CyuZOJaviTpbOFE5WzOpMVsrmDA",
        id: 3,
        firstname: 'Алексей',
        secondname: "Нахальный",
        thirdname: 'Игорьевич',
        age: 30,
        department: "Производственный отдел",
        position: "Мастер производства"
    },
    {
        photo: "https://pbs.twimg.com/media/DWp7d-sXUAADNWm.jpg:large",
        id: 4,
        firstname: 'Антон',
        secondname: "Горловой",
        thirdname: 'Павлович',
        age: 43,
        department: "Отдел снабжения",
        position: "Водитель"
    },
    {
        photo: "https://img.health-cp.com/img/personal-growth/dwayne-the-rock-johnson-has-an-important-message-for-anyone-struggling-with-depression.jpg",
        id: 5,
        firstname: 'Александр',
        secondname: "Сергеев",
        thirdname: 'Данилович',
        age: 26,
        department: "Делопроизводство",
        position: "Экономист"
    }
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

export default function Users() {
    const classes = useStyles();
    console.log(Dialogs.dialogs[0].name);
    const dialogs = Dialogs.dialogs;
    let groupIcon = <PeopleIcon fontSize="small"/>;
    let personIcon = <PersonIcon fontSize="small"/>;
    return (
        <React.Fragment>
            <CssBaseline/>
            {workers.map(({
                              id,
                              firstname,
                              secondname,
                              thirdname,
                              photo
                          }) =>
                <React.Fragment key={id}>
                    <UserCard worker={{id, firstname, secondname, thirdname,photo}}/>
                </React.Fragment>)}
        </React.Fragment>
    );
}