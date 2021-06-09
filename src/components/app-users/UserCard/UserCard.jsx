import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {workers} from "../Users";
import {getQueryParams} from "../../../functions/getQueryParams";

const useStyles = makeStyles({
    root: {
        marginTop: "20px",
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

export default function UserCard(props) {
    const classes = useStyles();
    //props.worker = workers[id];
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.worker?.photo ? props.worker.photo : "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-74.jpg"}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Сотрудник № {props?.worker?.id}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Фамилия: {props?.worker?.secondname}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Имя: {props?.worker?.firstname}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Отчество: {props?.worker?.thirdname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Вы можете начать переписку с данным сотрудником прямо сейчас.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button component={Link} to={"/user/"+props?.worker?.id} size="small" color="primary">
                    Открыть профиль
                </Button>
                <Button component={Link} to="/dialog" size="small" color="primary">
                    Добавить в контакты
                </Button>
            </CardActions>
        </Card>
    );
}