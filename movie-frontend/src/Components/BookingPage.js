import React, { Component } from 'react';
import { getMovieDetails } from '../Services/moviesAPI';

class BookingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: getMovieDetails(this.props.match.params.movieId)
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
