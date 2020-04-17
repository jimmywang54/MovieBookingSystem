
import React, { Component } from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';

import MovieService from '../Services/Movie_service';

import Movie from './Movie';

class MoviePage extends Component {

    constructor(props) {
        super(props);
        // console.log("In constructor");
        this.state = {
            moviesList: MovieService.getAllMovies(),
            movieDate: "Today"
        }
        this.handleSelectDate = this.handleSelectDate.bind(this);
    }

    handleSelectDate(e) {
        this.setState({
            movieDate: e.target.value
        });
    }


    render() {
        const { moviesList } = this.state;
        return (
            <div>
                <div>
                    <label>choose the time:
                        <select value={this.state.movieDate} onChange={this.handleSelectDate}>
                            <option value="Today">Today</option>
                            <option value="Apr 20">Apr 20</option>
                            <option value="Apr 21">Apr 21</option>
                            <option value="Apr 22">Apr 22</option>
                        </select>
                    </label>
                    {/* <div>chosen: {this.state.movieTime}</div> */}
                </div>
                <div className="my-movie">
                    <Container>
                        <Row >
                            {
                                (this.state.movieDate === "Today" ? (
                                    moviesList.map(movie => (
                                        <div className="movieCard" key={movie.id}>
                                            <Movie
                                                movie={movie}
                                            />
                                        </div>
                                    ))
                                ) : (
                                        moviesList.filter(movie => movie.filmDate === this.state.movieDate)
                                            .map(filteredMovie => (
                                                <div className="movieCard" key={filteredMovie.id}>
                                                    <Movie
                                                        movie={filteredMovie}
                                                    />
                                                </div>
                                            ))
                                    )
                                )

                            }
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}


export default MoviePage;


