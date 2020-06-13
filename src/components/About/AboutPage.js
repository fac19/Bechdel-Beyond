/* eslint-disable max-len */
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	logo: {
		marginTop: '3rem',
		margin: '0 auto',
		display: 'block',
	},
	title: {
		marginTop: '2rem',
		textAlign: 'center',
		fontSize: '2rem',
		fontFamily: 'Merriweather, serif',
		fontWeight: 'bold',
	},
	subtitle: {
		margin: '4% 15%',
		fontSize: '1rem',
		lineHeight: '1.4',
		textAlign: 'center',
		fontFamily: 'Merriweather, serif',
	},
	line: {
		width: '70%',
		margin: '0 auto',
	},
	buttonbox: {
		display: 'flex',
		flexDirection: 'column',
		width: 'auto',
		alignItems: 'center',
	},
	bechdelButton: {
		marginTop: '2rem',
		fontSize: '1rem',
		maxWidth: '50%',
		padding: '10px 25px',
		fontFamily: 'Montserrat, sans-serif',
	},
	homeButton: {
		marginTop: '4rem',
		fontSize: '0.7rem',
		maxWidth: '40%',
		fontFamily: 'Montserrat, sans-serif',
	},
}));

export default function AboutPage() {
	const classes = useStyles();

	return (
		<>
			<svg
				width="53"
				height="53"
				className={classes.logo}
				viewBox="0 0 53 53"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				id="favicon"
			>
				<path
					d="M46.7084 41.7915V23.354H41.7917V41.7915C41.7917 47.9373 46.7084 52.854 52.8542 52.854V47.9373C49.4126 47.9373 46.7084 
					45.2332 46.7084 41.7915Z"
					fill="#253278"
				/>
				<path
					d="M23.3542 46.7083C36.2523 46.7083 46.7083 36.2523 46.7083 23.3542C46.7083 10.456 36.2523 
					0 23.3542 0C10.456 0 0 10.456 0 23.3542C0 36.2523 10.456 46.7083 23.3542 46.7083Z"
					fill="#90A4AE"
				/>
				<path
					d="M23.3543 25.8122C24.712 25.8122 25.8127 24.7115 25.8127 23.3538C25.8127 
					21.9961 24.712 20.8955 23.3543 20.8955C21.9966 20.8955 20.896 21.9961 20.896 23.3538C20.896 24.7115 21.9966 25.8122 23.3543 25.8122Z"
					fill="#37474F"
				/>
				<path
					d="M23.3543 17.2082C26.7486 17.2082 29.5002 14.4566 29.5002 11.0623C29.5002 7.66809 26.7486 4.9165 23.3543 4.9165C19.9601 4.9165 17.2085 7.66809 17.2085 11.0623C17.2085 14.4566 19.9601 17.2082 23.3543 17.2082Z"
					fill="#253278"
				/>
				<path
					d="M23.3543 41.7917C26.7486 41.7917 29.5002 39.0401 29.5002 35.6458C29.5002 32.2516 26.7486 29.5 23.3543 29.5C19.9601 29.5 17.2085 32.2516 17.2085 35.6458C17.2085 39.0401 19.9601 41.7917 23.3543 41.7917Z"
					fill="#253278"
				/>
				<path
					d="M35.6458 29.4997C39.0401 29.4997 41.7917 26.7481 41.7917 23.3538C41.7917 19.9596 39.0401 17.208 35.6458 17.208C32.2516 17.208 29.5 19.9596 29.5 23.3538C29.5 26.7481 32.2516 29.4997 35.6458 29.4997Z"
					fill="#253278"
				/>
				<path
					d="M11.0626 29.4997C14.4568 29.4997 17.2084 26.7481 17.2084 23.3538C17.2084 19.9596 14.4568 17.208 11.0626 17.208C7.66833 17.208 4.91675 19.9596 4.91675 23.3538C4.91675 26.7481 7.66833 29.4997 11.0626 29.4997Z"
					fill="#253278"
				/>
			</svg>

			<Typography className={classes.title} variant="h2" component="h2">
				Bechdel & Beyond
			</Typography>
			<Typography
				data-cy={'app-info'}
				className={classes.subtitle}
				variant="h5"
				component="h5"
			>
				A new way to discover, review & share movies that pass the Bechdel Test
				and go beyond...
			</Typography>
			<Divider className={classes.line} />
			<div className={classes.buttonbox}>
				<Button
					data-cy={'bechdel-test'}
					className={classes.bechdelButton}
					variant="outlined"
				>
					<Link component={RouterLink} to="/bechdel">
						How it works
					</Link>
				</Button>
				<Button className={classes.homeButton} variant="outlined">
					<Link component={RouterLink} to="/">
						Skip to the movies
					</Link>
				</Button>
			</div>
		</>
	);
}
