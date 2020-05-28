import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import GetMovie from './Movie/GetMovie';
import GetMovieDetails from './MovieDetails/GetMovieDetails';
import getData from '../../utils/getData';
import {
	GetMovieStatsCast,
	GetMovieStatsCrew,
} from './MovieStats/GetMovieStats';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function MoviePage({ match: { params } }) {
	const classes = useStyles();
	const [movieData, setMovieData] = React.useState('');
	const [reviewData, setReviewData] = React.useState('');
	const [statsCrewData, setCrewStatsData] = React.useState('');
	const [statsCastData, setCastStatsData] = React.useState('');

	React.useEffect(() => {
		console.log(params);
		getData(`/film/${params.title}`).then((data) => setMovieData(data));
		getData(`/film/${params.title}/reviews`).then((data) =>
			setReviewData(data),
		);
		getData(`/film/${params.title}/crew`).then((data) =>
			setCrewStatsData(data),
		);
		getData(`/film/${params.title}/cast`).then((data) =>
			setCastStatsData(data),
		);
	}, []);

	if (!movieData || !reviewData || !statsCrewData || !statsCastData)
		return <p>Loading</p>;

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<GetMovie movieData={movieData} reviewData={reviewData} />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<GetMovieDetails
							movieData={movieData}
							statsCrewData={statsCrewData}
						/>
						<Button
							variant="outlined"
							component={Link}
							to={`/create-review/${params.title}`}
						>
							Write Review
						</Button>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<GetMovieStatsCast statsCastData={statsCastData} />
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<GetMovieStatsCrew statsCrewData={statsCrewData} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
