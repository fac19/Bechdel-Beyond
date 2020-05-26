import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MenuAppBar from './components/MenuAppBar';
import AllFilms from './components/Home/AllFilms';
import SignupPage from './components/UserTasks/Signup/Signup';
import MoviePage from './components/Movie/MoviePage';
import SignIn from './components/UserTasks/Login/Login';
import AboutPage from './components/About/AboutPage';
import ReviewPage from './components/Review/ReviewPage';
import UserPage from './components/UserTasks/UserPage/UserPage';

function App() {
  const accessToken = window.localStorage.getItem('access token');
  const [currentPage, setCurrentPage] = React.useState('HOME');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MenuAppBar
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            accessToken={accessToken}
          />
        </header>
        <Switch>
          {/* <Route exact path="/" component={AllFilms}></Route> */}
          <Route
            exact
            path="/signup"
            component={SignupPage}
            accessToken={accessToken}
          ></Route>
          {!accessToken ? (
            <Route
              exact
              path="/login"
              component={SignIn}
              accessToken={accessToken}
            ></Route>
          ) : (
            ''
          )}
          <Route exact path="/create-review" component={ReviewPage}></Route>
          {/* {accessToken ? (
            <Route exact path="/user-profile" component={UserPage}></Route>
          ) : (
            ''
          )} */}
          {/*<Route exact path="/about" component={AboutPage}></Route> */}
          {/* <Route exact path="/movie" component={MoviePage}></Route */}
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
