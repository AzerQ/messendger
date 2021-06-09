import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main_component: {
        margin: theme.spacing(2),
        background: "lightblue"
    }
}));
export default function Filler() {
    const classes = useStyles();
    return (
        <Container component="main" className={classes.main_component} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                Sticky footer
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {'Pin a footer to the bottom of the viewport.'}
                {'The footer will move as the main element of the page grows.'}
            </Typography>
            <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
    );
}