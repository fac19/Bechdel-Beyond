import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import GetMovie from './Movie/GetMovie';
import GetMovieDetails from './MovieDetails/GetMovieDetails';
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

export default function DisplayMovie() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<GetMovie />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<GetMovieDetails />
						<Button variant="outlined">Write review</Button>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<GetMovieStatsCrew />
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<GetMovieStatsCast />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);

	// film compnent

	// film details

	// film stats

	// button to review
}
