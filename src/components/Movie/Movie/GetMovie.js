import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import calculateBechdel from '../../../utils/bechdelScore';
import calculateBeyond from '../../../utils/beyondScore';

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

export default function GetMovie({ movieData, reviewData }) {
	// film compnent
	// title
	// image
	// ratings
	// bechdel rate
	// beyond rate
	const classes = useStyles();

	const showPoster = (poster) => {
		if (poster.status === 404) {
			return 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
		}
		return poster;
	};

	return (
		<>
			{/* <Typography variant="h3" component="h3">
				{movieData.title}
			</Typography> */}
			<CardMedia
				className={classes.media}
				component={'img'}
				src={showPoster(movieData.poster)}
				title={movieData.title}
			/>
			<Typography variant="h5" component="h3">
				Metascore: {movieData.ratings}
			</Typography>
			<Typography variant="h5" component="h3">
				Bechdel: {calculateBechdel(reviewData)}
			</Typography>
			<Typography variant="h5" component="h3">
				Beyond: {calculateBeyond(reviewData)}
			</Typography>
		</>
	);
}
