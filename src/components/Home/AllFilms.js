import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import getData from '../../utils/getData';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '300px',
    height: '400px',
    margin: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  media: {
    height: '100px',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
}));

export default function AllFilms() {
  const [filmData, setFilmData] = React.useState('');
  const classes = useStyles();

  React.useEffect(() => {
    getData('/films').then((data) => setFilmData(data));
  }, []);

  if (!filmData) return null;

  const showPoster = (poster) => {
    if (poster.status === 404) {
      return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
    }
    return poster;
  };

  return (
    <div>
      <Grid container justify="center">
        {filmData.map((film) => (
          <Grid item key={film.id}>
            <Card>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  component={'img'}
                  src={showPoster(film.poster)}
                  title={film.title}
                />
                <CardContent gutterbottom="true">
                  <Typography variant="h5" component="h3">
                    {film.title}
                  </Typography>
                  <Typography className={classes.title}>
                    {'Synopsis: '}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {film.plot}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
