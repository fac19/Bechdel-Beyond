import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

export default function AboutPage() {

	return (
		<>
			<Typography variant="h2" component="h2">
				Bechdel & Beyond
			</Typography>
			<Typography variant="h5" component="h5">
				A new way to discover, review & share movies
				that pass the Bechdel Test and go beyond...
			</Typography>
			<Button variant="outlined">
				<Link component={RouterLink} to="/bechdel">
					How it works
				</Link>
			</Button>
			<Button variant="outlined">
				<Link component={RouterLink} to="/">
					Skip to the movies
				</Link>
			</Button>
		</>
	);
}
