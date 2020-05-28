import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

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
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '75%',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	searchWrapper: {
		padding: '40px 10px 10px 10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default function AllFilms({ filmData, setFilmData }) {
	const [movieTitle, setMovieTitle] = React.useState('');
	const [currentMovies, setCurrentMovies] = React.useState([]);
	const classes = useStyles();
	React.useEffect(() => {
		if (!movieTitle) {
			setCurrentMovies(filmData);
		} else {
			let filteredFilms = filmData.filter((film) => {
				if (film.title.includes(movieTitle)) {
					return film;
				} else {
					setCurrentMovies(null);
					return null;
				}
			});

			setCurrentMovies(filteredFilms);
		}
	}, [movieTitle]);

	if (!filmData) return null;

	const showPoster = (poster) => {
		if (poster.status === 404) {
			return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
		}
		return poster;
	};

	return (
		<>
			<div className={classes.searchWrapper}>
				<Paper
					component="form"
					className={classes.root}
					onSubmit={(e) => e.preventDefault()}
				>
					<InputBase
						className={classes.input}
						onChange={(e) => setMovieTitle(e.target.value)}
						placeholder="Search Movies"
						inputProps={{ 'aria-label': 'search movies' }}
					/>
					<IconButton
						type="submit"
						className={classes.iconButton}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
			</div>
			<Grid container justify="center">
				{currentMovies.length < 1 ? (
					<Typography variant="h5" component="h3">
						No movies from your search
					</Typography>
				) : (
					<>
						{currentMovies.map((film) => (
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
					</>
				)}
			</Grid>
		</>
	);
}
