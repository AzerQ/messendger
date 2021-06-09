import React from 'react';
import Dialogs from '../../JSONData/UserDialogs.json';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import getMD5 from "../../functions/getMD5";
import AuthStyle from "./Auth.css"
import Typer from "./Typer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
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
    marginInputs: {
        marginLeft: theme.spacing(2),
        width: "50%"
    },
    marginText: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(4),
        fontFamily: "sans-serif",
    },
    buttonEnter: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        width: "230px"
    },
    buttonTool: {
        marginLeft: theme.spacing(2),
        width: "230px"
    },
    my_text: {
        color: "#615d5d",
        fontFamily: "monospace",
        fontSize: "25px",
        fontWeight: 400,
        lineHeight: "40px",
        margin: "20px"
    },

}));

function gen_password(len) {
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;%:?*()_+";
    for (var i = 0; i < len; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    if (password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) return password
    else return gen_password(len)
}

export default function Auth(props) {
    /*Переменные логин и пароль */
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [serv, setServ] = React.useState({
            user_login: "",
            user_password: ""
        })
    ;
    /*Запись значения при изменении в текстбоксе*/
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };
    const generateClick = (event) => {
        setValue2(gen_password(11));
    };
    /*Проверка введёных данных и переход к регистрации*/
    const registrationClick = (event) => {
        let log_math = value1.match(/^(\w+){3,32}$/);
        log_math ? console.log("login entered...") : alert("В логине присутствуют символы не указанные в описании!");
        let pass_math = value2.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g);
        pass_math ? console.log("password entered...") : (value2.match(/^[А-Яа-я]+$/)) ? alert("В пароле присутствуют символы не указанные в описании!") :
            alert("Ненадёжный пароль!");
        if (log_math && pass_math) {
            alert("Логин и пароль подходят!");
            setServ({
                user_login: value1,
                user_password: getMD5(value2)
            })
            console.log("UserPass " + serv.user_password);
        } else {
            alert("Введите новые данные.")
        }
        /*setValue1("");
        setValue2("");
        */
    };
    const classes = useStyles();
    console.log(Dialogs.dialogs[0].name);
    const dialogs = Dialogs.dialogs;
    let groupIcon = <PeopleIcon fontSize="small"/>;
    let personIcon = <PersonIcon fontSize="small"/>;
    let AuthMode = props.AuthMode;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper>
                <h1 className={classes.marginText}>Создание нового аккаунта</h1>
                <div className={classes.my_text}>Добро пожаловать на сайт "workmessage".<br/> Здесь вы можете общаться с
                    коллегами и
                    обсуждать рабочие задачи!
                    <Typer title={"Здравствуйте!"} dataText={["Присоединятесь к нам прямо сейчас...","Общаться станет легче!",
                        "Очень рады вашему визиту!","Как вам такое?","Пишите на здоровье!","Зарегистрироваться очень просто."]}></Typer>
                    <Typer title={"Для начала:"} dataText={["придумайте логин.","придумайте пароль.","запросите ключ доступа у вашего системного администратора."]}></Typer>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <h3 className={classes.marginText}>Задайте логин (комбинация латинских заглавных и строчных букв, а
                        также цифр):</h3>
                    <div>
                        <Input onChange={handleChange1} value={value1} className={classes.marginInputs}
                               placeholder="Логин"
                               inputProps={{'aria-label': 'description'}}/>
                        <Button className={classes.buttonTool} variant="contained" color="secondary">
                            Проверить доступность
                        </Button>
                    </div>
                    <h3 className={classes.marginText}>Задайте пароль (комбинация латинских букв, цифр, и спецсимволов,
                        минимальная длинна 7 символов):</h3>
                    <div>
                        <Input onChange={handleChange2} value={value2} className={classes.marginInputs}
                               placeholder="Пароль"
                               inputProps={{'aria-label': 'description'}}/>
                        <Button onClick={generateClick} className={classes.buttonTool} variant="contained"
                                color="secondary">
                            Генерировать пароль
                        </Button>
                    </div>
                    <h3 className={classes.marginText}>Введите ключ-код приглашения (выдаётся системным
                        администратором):</h3>
                    <Input onChange={handleChange3} value={value3} className={classes.marginInputs}
                           placeholder="Ключ-код"
                           inputProps={{'aria-label': 'description'}}/>
                    <Button onClick={registrationClick} className={classes.buttonEnter} variant="contained"
                            color="primary">
                        Pегистрация
                    </Button>
                </form>

            </Paper>
        </React.Fragment>
    );
}