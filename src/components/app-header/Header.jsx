import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Sidepanel from "../app-sidepanel/Sidepanel";
import {BrowserRouter, Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {fade} from "@material-ui/core";

const MainColor = "primary";
const ButtonVariant = "";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton2: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
            '&:focus': {
                width: '24ch',
            },
        },
    },
    buttonContainer: {
        justifyContent: "flex-start",
        display: "flex"
    },
    userContainer: {
        display: "flex",
        flexDirection: "row"
    },
    appBar: {
        display: "flex",
        flexDirection: "row",
        background: "#0572cb",
    },
    avatar: {
        marginTop: theme.spacing(1.7),
        marginLeft: theme.spacing(2),
        width: theme.spacing(6),
        height: theme.spacing(6)
    },
    profileInfo: {
        display: "flex",
        flexDirection: "row",
        marginLeft: theme.spacing(2),
        fontSize: "15px",
    },
    menuButton: {
        textDecoration: "none",
        fontSize: "18px",
        textShadow: "black 2px 2px 2px",
        fontWeight: "bold",
        marginLeft: theme.spacing(2),
        color: "white",
        backgroundColor: "#0b86bf",
        '&:hover': {
            backgroundColor: "#88b7fd",
        },
    },
    enterButton: {
        marginTop: theme.spacing(1),
        height: "20px",
        textDecoration: "none",
        fontSize: "13px",
        textShadow: "black 2px 2px 2px",
        fontWeight: "bold",
        marginLeft: theme.spacing(2),
        color: "white",
        backgroundColor: "#43b804",
        '&:hover': {
            backgroundColor: "#84ec71",
        }
    },
    exitButton: {
        marginTop: theme.spacing(1),
        height: "20px",
        textDecoration: "none",
        fontSize: "13px",
        textShadow: "black 2px 2px 2px",
        fontWeight: "bold",
        marginLeft: theme.spacing(2),
        color: "white",
        backgroundColor: "#b60606",
        '&:hover': {
            backgroundColor: "#fa2c55",
        }
    },
    profButtons:{
        marginTop: "5px"
    }
}));

const mouseClickEvents = ['mousedown', 'click', 'mouseup'];

function simulateMouseClick(element) {
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}


export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}
                position="static">
            <Link id={"usLink"} to={"/users"}/>
            <Toolbar>
                <Container>
                    <Sidepanel/>
                </Container>
                <Container className={classes.buttonContainer}>
                    <Button component={Link} to="/main" className={classes.menuButton} variant={ButtonVariant}
                            size="
                            large"
                            color={MainColor}>Главная</Button>
                    <Button component={Link} className={classes.menuButton} to="/profile" variant={ButtonVariant}
                            size="large"
                            color={MainColor}>Профиль</Button>
                    <Button component={Link} className={classes.menuButton} to="/settings" variant={ButtonVariant}
                            size=" large"
                            color={MainColor}>Настройки</Button>
                </Container>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        onDoubleClick={() => {
                            var el = document.getElementById("usLink");
                            console.log(el);
                            simulateMouseClick(el);
                        }}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />
                </div>
                <Container className={classes.userContainer}>
                    <Avatar className={classes.avatar} alt="Remy Sharp"
                            src="https://avavatar.ru/images/full/31/kUT6xXRTgaLKbZsZ.jpg"/>
                    <div className={classes.profileInfo}>
                        <p>Александр Власенков</p>
                    </div>
                    <div className={classes.profButtons}>
                    <Button component={Link} to="/enter" className={classes.enterButton} variant={ButtonVariant}
                            size="
                            large"
                            color={MainColor}>Вход</Button>
                    <Button component={Link} to="/main" className={classes.exitButton} variant={ButtonVariant}
                            size="
                            large"
                            color={MainColor}>Выход</Button>
                    </div>
                </Container>
            </Toolbar>

        </AppBar>
    );
}

