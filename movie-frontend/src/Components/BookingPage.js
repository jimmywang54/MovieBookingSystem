import React, { Component } from 'react';
import MovieService from '../Services/Movie_service';
import AuthService from '../Services/Auth_service';

import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BookingPage extends Component {
s
    constructor(props) {
        super(props);
        this.state = {
            movie: props.location.state.movie,
            theater: props.location.state.theater,
            filmDate: props.location.state.filmDate,
            currentUser: AuthService.getCurrentUser(),
            selectTime: undefined,
            flag: true,
            currentMovie: props.location.state.movie,
            times: [],
            seats: [],
            selectSeat: []
        }

        this.handleSelectTime = this.handleSelectTime.bind(this);
        this.handleSelectSeat = this.handleSelectSeat.bind(this);
    }

    componentDidMount() {
        this.setState({
            movieDetail: MovieService.getMovieDetails(this.state.movie.id)
                .filter(m => (m.filmDate === this.state.filmDate) && (m.theatreName === this.state.theater.name)),
            selectTime: undefined
        })
    }

    handleSelectTime(e) {
        e.preventDefault();

        let md = this.state.movieDetail.filter(movie => (movie.filmTiming === e.target.value))[0];
        
        this.setState({
            selectTime: e.target.value,
            currentMovie: md,
            seats: MovieService.getMovieLayout(this.state.currentMovie)
        });
    }

    handleSelectSeat(e) {
        
        this.setState({
            selectSeat: [e.target.value]
        })
    }

    render() {
        const { movie, movieDetail, currentUser, seats } = this.state;
        console.log(this.state.selectSeat)
        console.log(this.state.currentMovie.filmSessionId)

        if (movieDetail && this.state.flag) {
            movieDetail.map(m => {
                if (this.state.times.indexOf(m.filmTiming) === -1)
                    this.state.times.push(m.filmTiming)
            })
            this.state.flag = false
        }


        return (
            <div>
                {movieDetail ? (
                    <div>
                        <p>The movie you want to book:</p>
                        <p>Name: {movie.name}</p>
                        <p>Price: {movie.pricePerTicket}</p>
                        <label>choose the time:
                        {
                            <select value={this.state.selectTime} onChange={this.handleSelectTime}>
                                <option key="none" value="none">Select Movie Time</option>
                                {
                                        this.state.times.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                }
                            </select>
                        }
                        {
                            (!this.state.selectTime || this.state.selectTime === "none") ? (
                                <div></div>
                            ): (
                                <div>
                                    <label>
                                        Select a Seat:
                                    </label>
                                    <select onChange={this.handleSelectSeat}>
                                        
                                            <option key="none" value="none">Select</option>
                                        {
                                            seats.map(seat => (
                                                <option key={seat} value={seat}>{seat}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )
                        }
                        {currentUser ? (
                            <Link to={{
                                pathname: '/paymentPage',
                                state: {
                                    seat: this.state.selectSeat,
                                    filmSessionId: this.state.currentMovie.filmSessionId
                                }
                            }}>
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
