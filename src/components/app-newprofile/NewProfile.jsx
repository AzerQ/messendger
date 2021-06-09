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
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {AddMessage} from "../app-dialog/Dialog";
import getMD5 from "../../functions/getMD5";
import NativeSelect from "@material-ui/core/NativeSelect";
import {withStyles} from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import PhotoPreview from "./photoPreview/PhotoPreview";
import Context from "../../context/Context";

let prof = {
    FirstName: null,
    SecondName: null,
    ThirdName: null,
    Age: null,
    Photo: null,
    Department: null,
    Position: null
};

let Departments = ["Отдел 1", "Отдел 2", "Отдел 3", "Отдел 4", "Отдел 5", "Отдел 6", "Отдел 7", "Отдел 8"];
let Positions = ["Должность 1", "Должность 2", "Должность 3", "Должность 4", "Должность 5", "Должность 6", "Должность 7", "Должность 8"];
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
        marginLeft: theme.spacing(2),
        fontFamily: "sans-serif",
    },
    buttonEnter: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: "200px"
    }
}));


export default function NewProfile(props) {
    var current = 0;
    /*Переменные логин и пароль */
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [FirstName, setFirstName] = React.useState('');
    const [SecondName, setSecondName] = React.useState('');
    const [ThirdName, setThirdName] = React.useState('');
    const [Age, setAge] = React.useState(18);
    const [Photo, setPhoto] = React.useState('');
    const [Department, setDepartment] = React.useState(0);
    const [Position, setPosition] = React.useState(0);
    const [PhotoEx, setPhotoEx] = React.useState(false);
    /*Запись значения при изменении в текстбоксе*/
    const handleChange1 = (event) => {
        setFirstName(event.target.value);
        /*empty*/
    };
    const handleChange2 = (event) => {
        setSecondName(event.target.value);
        /*empty*/
    };
    const handleChange3 = (event) => {
        setThirdName(event.target.value);
        /*empty*/
    };


    const handleChange4 = (event) => {
        setAge(event.target.value);

    };

    const handleChange5 = (event) => {
        setPhoto(event.target.value);
        /*empty*/
    };
    const handleChange6 = (event) => {
        setDepartment(event.target.value);
        /*empty*/
    };
    const handleChange7 = (event) => {
        setPosition(event.target.value);
        /*empty*/
    };
    /*Проверка введёных данных и переход к регистрации*/
    const registrationClick = (event) => {
        let FirstNameOK = FirstName.match(/^[А-Яа-я]+$/);
        let SecondNameOK = SecondName.match(/^[А-Яа-я]+$/);
        let ThirdNameOK = ThirdName.match(/^[А-Яа-я]+$/);
        let AgeOK = (Age >= 18) && (Age <= 80);
        let RightFields = 0;
        console.log(PhotoEx);
        if (FirstNameOK) {
           prof.FirstName = FirstName ;RightFields++
        } else {
            alert("Поле имя содержит буквы латиницы, цифры или спецсимволы!")
        }
        if (SecondNameOK) {
            prof.SecondName = SecondName;RightFields++
        } else {
            alert("Поле фамилия содержит буквы латиницы, цифры или спецсимволы!")
        }
        if (ThirdNameOK) {
            prof.ThirdName = ThirdName;RightFields++
        } else {
            alert("Поле отчество содержит буквы латиницы, цифры или спецсимволы!")
        }
        if (AgeOK) {
            prof.Age = Age;RightFields++
        } else {
            alert("Возраст не лежит в пределе (18-80)!")
        }
        if (PhotoEx) {
            prof.Photo = Photo;RightFields++
        } else {
            alert("По данному пути фотография не найденна!")
        }
        if (RightFields == 5) {
            alert("Все поля подходят!")
        }
    };
    const classes = useStyles();
    let age;
    let handleChange;
    return (
        <Context.Provider value={{setPhotoEx}}>
            <React.Fragment>
                <CssBaseline/>
                <Paper>
                    <h2 className={classes.marginText}>Заполнение данных профиля</h2>
                    <form className={classes.root} noValidate autoComplete="off">
                        <h3 className={classes.marginText}>Введите имя:</h3>
                        <Input onChange={handleChange1} value={FirstName} className={classes.marginInputs}
                               placeholder="Имя"
                               inputProps={{'aria-label': 'description'}}/>
                        <h3 className={classes.marginText}>Введите фамилию:</h3>
                        <Input onChange={handleChange2} value={SecondName} className={classes.marginInputs}
                               placeholder="Фамилия"
                               inputProps={{'aria-label': 'description'}}/>
                        <h3 className={classes.marginText}>Введите отчество:</h3>
                        <Input onChange={handleChange3} value={ThirdName} className={classes.marginInputs}
                               placeholder="Отчество"
                               inputProps={{'aria-label': 'description'}}/>
                        <h3 className={classes.marginText}>Укажите количество ваших полных лет (18-80):</h3>
                        <TextField type="number" onChange={handleChange4} value={Age} className={classes.marginInputs}
                                   InputProps={{inputProps: {min: 18, max: 80}}}
                                   placeholder="Возраст"
                        />
                        <h3 className={classes.marginText}>Ссылку на фото профиля (предварительно загрузив фотографию на
                            хостинг):</h3>
                        <Input onChange={handleChange5} value={Photo} className={classes.marginInputs}
                               placeholder="Ссылка на фото"
                               inputProps={{'aria-label': 'description'}}/>
                        <PhotoPreview url={Photo}/>
                        <h3 className={classes.marginText}>Выберете отдел из выпадающего списка:</h3>
                        <Select
                            className={classes.marginInputs}
                            native
                            value={Department}
                            onChange={handleChange6}
                            inputProps={{
                                name: 'department',
                                id: 'dep_select',
                            }}
                        >
                            {current = 0}
                            {Departments.map((dep =>
                                    <option value={++current}>{dep}</option>
                            ))}
                        </Select>
                        <h3 className={classes.marginText}>Выберете должность из выпадающего списка:</h3>
                        <Select
                            className={classes.marginInputs}
                            native
                            value={Position}
                            onChange={handleChange7}
                            inputProps={{
                                name: 'position',
                                id: 'pos_select',
                            }}
                        >
                            {current = 0}
                            {Positions.map((pos =>
                                    <option value={++current}>{pos}</option>
                            ))}
                        </Select>

                        <Button onClick={registrationClick} className={classes.buttonEnter} variant="contained"
                                color="primary">
                            Сохранить данные
                        </Button>

                    </form>

                </Paper>
            </React.Fragment>
        </Context.Provider>
    );
}