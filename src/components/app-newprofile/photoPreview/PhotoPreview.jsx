import {makeStyles} from "@material-ui/core";
import Context from "../../../context/Context";
import {useContext} from "react";

const useStyles = makeStyles((theme) => ({
    img_content: {
        display: "flex",
        margin: theme.spacing(2)
    },

}));

export default function PhotoPreview(props) {
    const classes = useStyles();

    const {setPhotoEx} = useContext(Context);

    function f_none() {
        setPhotoEx(false);
    }

    function f_done() {
        setPhotoEx(true);
    }

    return (
        <div className={classes.img_content}>
            <img onError={f_none.bind(null)} onLoad={f_done.bind(null)} alt="Изображение не найдено!" height="400" width="400" src={props.url}/>
        </div>
    )
}