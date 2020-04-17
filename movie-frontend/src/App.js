import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

import MoviePage from "./Components/MoviePage";
import TheaterPage from "./Components/TheaterPage";
import MainPage from "./Components/MainPage";
import SignInPage from "./Components/SignInPage"
import RegisterPage from "./Components/RegisterPage"
import BookingPage from './Components/BookingPage';
import Profile from './Components/Profile';

import AuthService from './Services/Auth_service';
import MovieService from './Services/Movie_service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
      theaters: MovieService.getTheaters()
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

    const { currentUser, theaters } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Best Movie Theater
            </Link>
            <div className="navbar-nav">
              <li className="nav-item">
                <Link to={"/main"} className="nav-link">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/movies"} className="nav-link">
                  <Button>Movies</Button>
                </Link>
              </li>
              <li className="nav-item">
                <DropdownButton id="dropdown-basic-button" title="Our Theater">
                  {
                    theaters.map(theater => (
                      <div key={theater.name}>
                        <Dropdown.Item href={"/theaters/" + theater.id}>
                            {theater.name}
                        </Dropdown.Item>

                      </div>
                    ))
                  }
                </DropdownButton>
              </li>
            </div>

            {currentUser ? (
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    <Button>{currentUser.username}</Button>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href='/login' className="nav-link" onClick={this.logOut}>
                    <Button>LogOut</Button>
                  </a>
                </li>
              </div>
            ) : (
                <div className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      <Button>Login</Button>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      <Button>Sign Up</Button>
                    </Link>
                  </li>
                </div>
              )}
          </nav>

          <div className="container-routes">
            <Switch>
              <Route exact path={["/", "/main"]} render={() => <MainPage />} />
              <Route exact path="/movies" render={() => <MoviePage />} />
              <Route exact path="/theaters/:theaterId" component={TheaterPage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/register" render={() => <RegisterPage />} />
              <Route exact path="/login" render={() => <SignInPage />} />

              <Route exact path="/bookingPage/:movieId" component={BookingPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


export default App;


// To pass prop to component use render
// It's ok to use component, but the children component will remount each time we call route dom
// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />