import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Grid  from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import getData from "../utils/getData";

const useStyles = makeStyles((theme) => ({
  media: {
    height: '300px',
    width: '200px', 
  },
}));

export default function AllFilms() {
  const [filmData, setFilmData] = React.useState('')
  const classes = useStyles()

  React.useEffect(() => {
    getData('/films').then(data => setFilmData(data))}, [])
  
    if (!filmData) return null

  console.log(filmData)

  const showPoster = (poster) => {
    if (poster.status === 404){
     return "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png"

    }
    return poster
  }


return (
    <div>
      <Grid container spacing={40} justify="center">
        {filmData.map(film => (
          <Grid item key={film.title}>
            <Card>
              <CardActionArea>
        <CardMedia
          className={classes.media}
          image={showPoster(film.poster)}
          title={film.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {film.title}
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

