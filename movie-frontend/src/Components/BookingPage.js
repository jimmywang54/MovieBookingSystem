import React, { Component } from 'react';
import MovieService from '../Services/Movie_service';

class BookingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: MovieService.getMovieDetails(this.props.match.params.movieId)
        }
    }

    render() {
        return (
            <div>
                <p>The movie you want to book:</p>
                <p>Movie Name: {this.state.movie.name}</p>
                <p>Price: {this.state.movie.pricePerTicket}</p>
            </div>
            
            
        )
    }
}


export default BookingPage;
