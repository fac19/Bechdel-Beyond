import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import AllFilms from './components/AllFilms';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuAppBar />
      <AllFilms />
    </div>
  );
}

export default App;

/*
 <Router>
      <div>
        <MenuAppBar />
          <ul>
            <li>
              <Link to="/">All Films</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
            <Switch>
            <Route path="/">
              <AllFilms />
            </Route>
            <Route path=`/${film.title}`>
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

*/
