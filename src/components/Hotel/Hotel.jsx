import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 200,
    },
});

const Hotel = ({ location, title, cover, id }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={cover.url}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location.centre} from center
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/${id}`}>
                        Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

Hotel.propTypes = {
    location: PropTypes.object,
    title: PropTypes.string,
    cover: PropTypes.object,
    id: PropTypes.string
}

export { Hotel };