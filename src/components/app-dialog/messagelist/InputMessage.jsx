import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import {AddMessage} from "../Dialog"

const useStyles = makeStyles((theme) => ({
    Container: {
        marginBottom: theme.spacing(2),
        padding: "5px",
        border: "3px ridge #0572cb",
        background: "white",
        color: "black",
    },
    button: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginRight:theme.spacing(2)
    },
    black: {
        background: "black",
    },
}));

export default function InputMessage(props) {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const sendClick = (event) => {
        if (value.trim() != "") {
            AddMessage({
                m_sender: "",
                m_text: value,
                m_date: new Date().toTimeString()
            });
            setValue("");
        }
    };
    const classes = useStyles();
    let Black = <div className={classes.black}>hi</div>;
    return (
        <form className={classes.Container} noValidate autoComplete="off">
            <Grid container spacing={0}>
                <Grid item xs={7}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Введите сообщение"
                        multiline
                        rowsMax={4}
                        value={value}
                        onChange={handleChange}
                        style={{width: "95%", marginLeft: "16px",marginBottom:"10px"}}
                    />
                </Grid>
                <Grid item xs={5}>
                    <ButtonGroup>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<SendIcon/>}
                            onClick={sendClick}
                        >
                            Отправить
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<CloudUploadIcon/>}
                        >
                            Загрузить файл
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </form>
    );
}
