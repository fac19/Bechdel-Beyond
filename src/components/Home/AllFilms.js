import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	card: {
		width: '300px',
		height: '500px',
		margin: '.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	media: {
		height: '250px',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 12,
	},
}));

export default function AllFilms({ filmData, setFilmData }) {
	const classes = useStyles();

	if (!filmData) return null;

	const showPoster = (poster) => {
		if (poster.status === 404) {
			return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
		}
		return poster;
	};

	return (
		<>
			<Grid container justify="center">
				{filmData.map((film) => (
					<Grid item key={film.movapi_id}>
						<Card component={Link} to={`/film/${film.title}`}>
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
									<Typography
										variant="body1"
										className={classes.subtitle}
										component="p"
									>
										{film.plot}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}
