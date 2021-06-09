import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {workers} from "../app-users/Users";
import Error404 from "../../Error404";

const useStyles = makeStyles({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        maxWidth: "900px",
    },
    media: {
        height: "600px",
    },
});

export default function FullUserCard(props) {
    const classes = useStyles();
    let id = props.match.params.id;
    let worker = workers[id-1];
    if (worker) {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={worker?.photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Сотрудник № {worker?.id}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Фамилия: {worker?.secondname}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Имя: {worker?.firstname}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Отчество: {worker?.thirdname}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Возраст: {worker?.age}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Отдел: {worker?.department}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Должность: {worker?.position}
                        </Typography>
                        <Typography style={{fontSize: "20px"}} variant="body2" color="textSecondary" component="p">
                            На данной форме представленна подробная информация о сотруднике.
                            Вы можете начать переписку с данным сотрудником прямо сейчас.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Добавить в контакты
                    </Button>
                </CardActions>
            </Card>
        );
    } else return (
        <Error404 title={"Работник не найден!"}/>
    );

}