import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';
import AllFilms from './components/Home/AllFilms';
import SignUp from './components/UserTasks/Signup/Signup';
import MoviePage from './components/Movie/MoviePage';
import LogIn from './components/UserTasks/Login/Login';

// import AboutPage from './components/About/AboutPage';
// import ReviewPage from './components/Review/ReviewPage';
// import UserPage from './components/UserTasks/UserPage/UserPage';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(8),
	},
}));
function App() {
	const classes = useStyles();
	const accessToken = window.localStorage.getItem('access token');
	const [loggedIn, setLoggedIn] = React.useState(null);
	const [currentPage, setCurrentPage] = React.useState('HOME');

	return (
		<Router>
			<div className="App">
				<header className={`App-header ${classes.root}`}>
					<MenuAppBar
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						loggedIn={loggedIn}
						setLoggedIn={setLoggedIn}
						accessToken={accessToken}
					/>
				</header>
				<Switch>
					<Route exact path="/" component={AllFilms}></Route>
					<Route
						exact
						path="/signup"
						render={() =>
							loggedIn ? (
								<Redirect to="/" />
							) : (
								<SignUp setLoggedIn={setLoggedIn} />
							)
						}
					/>

					<Route
						exact
						path="/login"
						render={() =>
							loggedIn ? (
								<Redirect to="/" />
							) : (
								<LogIn setLoggedIn={setLoggedIn} />
							)
						}
					/>

					{/* <Route exact path="/create-review" component={ReviewPage}></Route> */}
					{/* {accessToken ? (
            <Route exact path="/user-profile" component={UserPage}></Route>
          ) : (
            ''
          )} */}
					{/*<Route exact path="/about" component={AboutPage}></Route> */}
					<Route exact path="/movie" component={MoviePage}></Route>
					<Route path="*" render={() => <Redirect to="/" />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
