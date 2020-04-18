import React, { Component } from 'react';
import MovieService from '../Services/Movie_service';
import AuthService from '../Services/Auth_service';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class BookingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            movie: props.location.state.movie,
            theater: props.location.state.theater,
            movieDetail: MovieService.getMovieDetails(props.location.state.movie.filmId)
                .filter(movie => (movie.theatreId === props.location.state.theater.theatreId)),
            selectDate: undefined,
            selectTime: undefined,
            flag: true,
            currentMovie: props.location.state.movie,
            times: [],
            seats: [],
            selectSeat: [],
            movieDate: ["2020-04-24", "2020-04-25", "2020-04-26", "2020-04-27"]
        }

        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSelectTime = this.handleSelectTime.bind(this);
        this.handleSelectSeat = this.handleSelectSeat.bind(this);
    }


    handleSelectDate(e) {
        let m = this.state.movieDetail.filter(movie => (movie.filmDate === e.target.value));

        this.setState({
            selectDate: e.target.value,
            movieDetail: m
        })
    }

    handleSelectTime(e) {
        let m = this.state.movieDetail.filter(movie => (movie.filmTiming === e.target.value));

        this.setState({
            selectTime: e.target.value,
            movieDetail: m,
            seats: MovieService.getMovieLayout(m)
        });
    }

    handleSelectSeat(e) {

        this.setState({
            selectSeat: [e.target.value]
        })
    }

    render() {
        const { movie, movieDetail, currentUser, seats, selectDate } = this.state;
        // console.log(movieDetail)
        console.log(this.state.selectDate)
        // console.log(this.state.currentMovie.filmSessionId)

        if (movieDetail && this.state.flag) {
            movieDetail.map(m => {
                if (this.state.times.indexOf(m.filmTiming) === -1)
                    this.state.times.push(m.filmTiming)
            })
            this.state.flag = false
        }

        return (

            <div>
                <p>The movie you want to book:</p>
                <p>Name: {movie.name}</p>

                
                <p>Select Movie Date: </p>

                <select name="selectDate" onChange={this.handleSelectDate}>
                    <option key="none" value="none">Select Movie Date</option>
                    {
                        this.state.movieDate.map(date => (
                            <option key={date} value={date}>{date}</option>
                        ))
                    }
                </select>
                        
                {
                    (!this.state.selectDate || this.state.selectDate === "none") ? (
                        <div></div>
                    ): (
                        <div>
                            <p>choose the time:</p>

                            <select value={this.state.selectTime} onChange={this.handleSelectTime}>
                                <option key="none" value="none">Select Movie Time</option>
                                {
                                    this.state.times.map(time => (
                                        <option key={time} value={time}>{time}</option>
                                    ))
                                }
                            </select>
                        </div >
                        )
                }


                {
                    (!this.state.selectTime || this.state.selectTime === "none") ? (
                        <div></div>
                    ) : (
                            <div>
                                <label>
                                    Select a Seat:
                                    </label>
                                <select onChange={this.handleSelectSeat}>

                                    <option key="none" value="none">Select</option>
                                    {
                                        seats.map(seat => (
                                            <option key={seat.seatNumber} value={seat.seatNumber}>{seat.seatNumber}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )
                }

                {
                    currentUser ? (
                    <Link to={{
                        pathname: '/paymentPage',
                        state: {
                            seat: this.state.selectSeat,
                            // filmSessionId: this.state.currentMovie.filmSessionId
                        }
                    }}>
                        <Button variant="primary" >Book</Button>{' '}
                    </Link>
                    ) : (
                        <Link to='/login'>
                            <Button variant="primary" >Login to Book</Button>{' '}
                        </Link>
                    )
                }


            </div>

        )
    }
}


export default BookingPage;
