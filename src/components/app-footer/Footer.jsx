import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import LNK from "@material-ui/core/Link";
import {BrowserRouter, Link} from "react-router-dom";

const MainColor = "primary";
const ButtonVariant = "";

function Copyright() {
    return (
        <Typography variant="body2">
            {'Copyright © '}
            <LNK color="inherit" href="https://vk.com/azerq">
                AzerQ
            </LNK>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        justifyContent: "center",
        display: "flex"
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        background: "#0572cb"
    },
    button: {
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
    copyright: {
        textShadow: "black 2px 2px 2px",
        color: "white",
        marginTop: theme.spacing(4)
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <footer className={classes.footer}>
                <Container align={"center"}>
                    <Button component={Link} to="/feedback" className={classes.button} variant={ButtonVariant}
                            size="
                            large"
                            color={MainColor}>Отзыв о сайте</Button>
                    <Button component={Link} className={classes.button} to="/chatdev" variant={ButtonVariant}
                            size="large"
                            color={MainColor}>Написать разработчику</Button>
                    <Button component={Link} className={classes.button} to="/support" variant={ButtonVariant}
                            size=" large"
                            color={MainColor}>Служба поддержки</Button>
                </Container>
                <Container className={classes.copyright} align="center" maxWidth="sm">
                    <Typography variant="body1">Клиент обмена сообщениями AQMessendger.</Typography>
                    <Copyright/>
                </Container>
            </footer>
        </div>
    );
}