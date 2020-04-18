
import React, { Component } from 'react';
import '../App.css';
// import { Container, Row } from 'react-bootstrap';

import MovieService from '../Services/Movie_service';

// import Movie from './Movie';

class MoviePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // theater: props.location.state.theater,
            moviesList: MovieService.getAllMovies(),
            movieDate: undefined
        }

        this.handleSelectDate = this.handleSelectDate.bind(this);
    }

    handleSelectDate(e) {
        this.setState({
            movieDate: e.target.value
        });
    }


    render() {
        // const { moviesList, theater, movieDate } = this.state;
        const {moviesList} = this.state;
        console.log(moviesList)
        return (
            <div>
                {/* <div>
                    <h1>{theater.name}</h1>
                </div>
                <div className="my-movie">
                    <label>choose the time:
                        <select value={this.state.movieDate} onChange={this.handleSelectDate}>
                            <option value="">Select Time</option>
                            <option value="Apr 20">Apr 20</option>
                            <option value="Apr 21">Apr 21</option>
                            <option value="Apr 22">Apr 22</option>
                        </select>
                    </label>
                    <Container>
                        <Row >
                            {
                                moviesList.filter(movie => movie.theatreId === theater.id && (movie.filmDate === movieDate))
                                    .map(filteredMovie => (
                                        <div className="movieCard" key={filteredMovie.id}>
                                            <Movie
                                                movie={filteredMovie}
                                                theater={theater}
                                                filmDate={movieDate}
                                            />
                                        </div>
                                    ))
                            }
                        </Row>
                    </Container>
                </div> */}

            </div>
        )
    }
}


export default MoviePage;


