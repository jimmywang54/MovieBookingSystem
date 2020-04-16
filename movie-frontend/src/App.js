import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MoviePage from "./Components/MoviePage";
import User from "./Components/User";
import MainPage from "./Components/MainPage";
import SignInPage from "./Components/SignInPage"
import BookingPage from "./Components/BookingPage"
import RegisterPage from "./Components/RegisterPage"

import MovieService from './Services/Movie_service';
import AuthService from './Services/Auth_service';
import Profile from './Components/Profile';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      moviesList: MovieService.getAllMovies(),
      currentUser: undefined,
    }
  }


  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser()
      })
    }

  }

  logOut() {
    AuthService.logout();
  }


  render() {

    const { currentUser } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Best Movie Theater
            </Link>
            <div className="navbar-nav">
              <li className="nav-item">
                <Link to={"main"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"movies"} className="nav-link">
                  Movies
            </Link>
              </li>

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href='/login' className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
                <div className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                  </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                  </Link>
                  </li>
                </div>
              )}
          </nav>

          <div className="container-routes">
            <Switch>
              <Route exact path={["/", "/main"]} render={() => <MainPage />} />
              <Route exact path="/movies" render={() => <MoviePage {... this.state} />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/bookingPage/:movieId" component={BookingPage} />
              <Route exact path="/register" render={() => <RegisterPage />} />
              <Route exact path="/login" render={() => <SignInPage />} />
              <Route exact path="/user" render={() => <User />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;


// To pass prop to component use render
// It's ok to use component, but the children component will remount each time we call route dom
// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />