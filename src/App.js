import logo from './logo.svg';
import './App.css';
import Header from "./components/app-header/Header";
import React from "react";
import Footer from "./components/app-footer/Footer";
import Main from "./components/app-main/Main";
import {makeStyles} from "@material-ui/core/styles";
import giveDate from "./functions/giveDate";
import {BrowserRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    main_component: {
        width:"100%",
        display: "flex",
        flexDirection: "column",
    },
    main_content: {

    }
}));

function App() {
    const classes = useStyles();
    //alert(giveDate("09.05.2021 00:06"));
    return (
        <BrowserRouter>
        <div className={classes.main_component}>
            <Header/>
            <Main className={classes.main_content}/>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
