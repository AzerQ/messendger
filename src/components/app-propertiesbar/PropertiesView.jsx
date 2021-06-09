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
import Paper from "@material-ui/core/Paper";

const MainColor = "primary";
const ButtonVariant = "outlined";
const useStyles = makeStyles((theme) => ({
    propertiesContainer: {
        color: "white"
    },
    appBar: {
        display: "flex",
        flexDirection: "row",
        background: "#65b5ea",
    },
    menuButton: {
        fontWeight: "bold",
        marginLeft: theme.spacing(8)
    },
    title:{
        textShadow:"black 2px 2px 2px"
    }

}));


export default function PropertiesView(props) {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}
                position="static">
            <Toolbar>
                <Container className={classes.propertiesContainer}>
                    <Typography variant="h6" className={classes.title}>
                        {props.Title ? props.Title : "Title"}
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

