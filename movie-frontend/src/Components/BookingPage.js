import React, { Component } from 'react';
import MovieService from '../Services/Movie_service';
import AuthService from '../Services/Auth_service';

import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BookingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieId: props.match.params.movieId,
            movieDetail: undefined,
            currentUser: AuthService.getCurrentUser()
        }

        this.handleSelectTime = this.handleSelectTime.bind(this);
    }

    componentDidMount() {
        this.setState({
            movieDetail: MovieService.getMovieDetails(this.state.movieId),
            selectTime: undefined
        })
    }


    handleSelectTime(e) {
        e.preventDefault();
        this.setState({
            selectTime: e.target.value
        });
    }

    render() {
        // const { movieId, movieDetail, movieLayout } = this.state;
        const { movieDetail, currentUser } = this.state;
        console.log(this.state.selectTime)
        return (
            <div>
                {movieDetail ? (
                    <div>
                        <p>The movie you want to book:</p>
                        <p>ID: {movieDetail.name}</p>
                        <label>choose the time:
                        <select value={this.state.movieDate} onChange={this.handleSelectTime}>
                                <option key="none" value="none">Select Movie Time</option>
                                {

                                    movieDetail.times.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                }
                            </select>
                            {currentUser ? (
                                <Link to={'/paymentPage/' + movieDetail.id}>
                                    <Button variant="primary" >Book</Button>{' '}
                                </Link>
                            ) : (
                                    <Link to='/login'>
                                        <Button variant="primary" >Login to Book</Button>{' '}
                                    </Link>
                                )}

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
