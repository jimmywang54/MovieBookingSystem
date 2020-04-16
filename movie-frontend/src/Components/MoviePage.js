
import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Dropdown } from 'react-bootstrap';

import Movie from './Movie';

class MoviePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moviesList: props.moviesList
        }
    }


    render() {
        const { moviesList } = this.state;

        console.log(moviesList);

        return (
            <div>
                <div className="my-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Movie List
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                moviesList.map(movie => (
                                    <div key={movie.id}>
                                        <Dropdown.Item href={"/bookingPage/" + movie.id}>{movie.name}</Dropdown.Item>
                                    </div>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="my-movie">
                    <Container>
                        <Row >
                        {
                            moviesList.map(movie => (
                                <div className="movieCard" key={movie.id}>
                                <Movie
                                    movieId={movie.id}
                                    movieName={movie.name}
                                    imageName={movie.imageName}
                                    isSignin={this.props.isSignin}
                                />
                                </div>
                            ))
                        }
                        </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}


export default MoviePage;


