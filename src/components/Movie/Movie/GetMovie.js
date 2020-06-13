import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import calculateBechdel from '../../../utils/bechdelScore';
import calculateBeyond from '../../../utils/beyondScore';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		margin: '3%',
	},
	media: {
		height: '400px',
		objectFit: 'contain',
		width: '50%',
		marginRight: 0,
	},
	title: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	ratings: {
		textAlign: 'left',
	},
	score: {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: '1.3rem',
		fontWeight: 'Semi-bold',
	},
}));

export default function GetMovie({ movieData, reviewData }) {
	const classes = useStyles();

	const showPoster = (poster) => {
		if (poster.status === 404) {
			return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
		}
		return poster;
	};

	return (
		<div className={classes.root}>
			<CardMedia
				data-cy={'movie-poster'}
				className={classes.media}
				component={'img'}
				src={showPoster(movieData.poster)}
				title={movieData.title}
			/>
			<div className={classes.ratings}>
				<Typography
					data-cy={'metascore-score'}
					variant="body1"
					className={classes.score}
				>
					Metascore: {movieData.ratings}
				</Typography>
				<Typography
					data-cy={'bechdel-score'}
					variant="body1"
					className={classes.score}
				>
					Bechdel: {calculateBechdel(reviewData)}
				</Typography>
				<Typography
					data-cy={'beyond-score'}
					variant="body1"
					className={classes.score}
				>
					Beyond: {calculateBeyond(reviewData)}
				</Typography>
			</div>
		</div>
	);
}
