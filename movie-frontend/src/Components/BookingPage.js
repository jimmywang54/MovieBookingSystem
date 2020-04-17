import React, { Component } from 'react';
import MovieService from '../Services/Movie_service';

class BookingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieId: props.match.params.movieId,
            movieDetail: undefined
            // movieLayout: MovieService.getMovieLayout(movieDetail)
        }
    }

    componentDidMount() {
        this.setState({
            movieDetail: MovieService.getMovieDetails(this.state.movieId)
        })
    }

    render() {
        // const { movieId, movieDetail, movieLayout } = this.state;
        const { movieDetail } = this.state;

        return (
            <div>
                {movieDetail ? (
                    <div>
                        <p>The movie you want to book:</p>
                        <p>ID: {movieDetail.name}</p>
                        <label>choose the time:
                            <select value={this.state.movieDate} onChange={this.handleSelectTime}>
                        {
                            movieDetail.times.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))
                        }
                            </select>
                        </label>
                    </div>
                ) : (
                        <div></div>
                    )}
            </div>
        )
    }
}


export default BookingPage;
