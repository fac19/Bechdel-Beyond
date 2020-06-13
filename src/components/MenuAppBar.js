import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	title: {
		color: '#fff',
		textDecoration: 'none',
		fontSize: '1.4rem',
		fontFamily: 'Merriweather, serif',
	},

	appBar: {
		backgroundColor: '#654EA3',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	drawerLink: {
		fontFamily: 'Montserrat, sans-serif',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

export default function Navbar({
	currentPage,
	setCurrentPage,
	loggedIn,
	setLoggedIn,
}) {
	const classes = useStyles();
	const history = useHistory();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [navItems, setNavItems] = React.useState([]);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const logoutHandler = () => {
		handleDrawerClose();
		window.localStorage.removeItem('access token');
		setLoggedIn(false);
		history.push('/');
	};

	React.useEffect(() => {
		if (loggedIn) {
			setNavItems([
				{
					title: 'Search Movies',
					titleHref: '/',
				},
				{
					title: 'About',
					titleHref: '/about',
				},
			]);
		} else {
			setNavItems([
				{
					title: 'Search Movies',
					titleHref: '/',
				},
				{
					title: 'About',
					titleHref: '/about',
				},
				{
					title: 'Sign Up',
					titleHref: '/signup',
				},
				{
					title: 'Login',
					titleHref: '/login',
				},
			]);
		}
	}, [loggedIn]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						data-cy={'menu'}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>

					<Link
						data-cy={'toolbar'}
						className={classes.title}
						to="/"
						variant="body2"
					>
						<Typography
							className={classes.title}
							variant="h6"
							noWrap
							color="primary"
						>
							Bechdel & Beyond
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<List>
					{navItems.map((item) => (
						<ListItem
							onClick={() => {
								handleDrawerClose();
								setCurrentPage(item.title);
							}}
							data-cy={'menu-item'}
							button
							component={Link}
							key={item.title}
							to={item.titleHref}
							className={classes.drawerLink}
						>
							<ListItemText primary={item.title} />
						</ListItem>
					))}
				</List>
				{loggedIn ? (
					<>
						<Divider />
						<List>
							<ListItem onClick={logoutHandler} button key={'Log out'}>
								<ListItemText primary={'Log out'} />
							</ListItem>{' '}
						</List>
					</>
				) : null}
			</Drawer>
		</div>
	);
}
