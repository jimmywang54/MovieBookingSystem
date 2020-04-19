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
            movieDetail: undefined,
            selectDate: undefined,
            selectTime: undefined,
            flag: true,
            currentMovie: props.location.state.movie,
            times: [],
            seats: [],
            selectSeat: undefined,
            movieDate: ["2020-04-24", "2020-04-25", "2020-04-26", "2020-04-27"]
        }

        // console.log(this.state.movie);
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSelectTime = this.handleSelectTime.bind(this);
        this.handleSelectSeat = this.handleSelectSeat.bind(this);
    }

    componentDidMount() {
        var movieForTheatre = [];

        MovieService.getMovieDetails(this.state.movie.filmId)
            .then(res => {
                res.map(movie => {
                    if (movie.theatreId === this.state.theater.theatreId) {
                        movieForTheatre.push(movie);
                    }
                })
            });

        this.setState({
            movieDetail: movieForTheatre
        })

        console.log(this.state.movieDetail);
    }       
    


    handleSelectDate(e) {
        let m = this.state.movieDetail.filter(movie => (movie.filmDate === e.target.value));
        console.log(this.state.movieDetail)
        console.log(m);
        if(m.length > 0) {
            this.setState({
                selectDate: e.target.value,
                movieDetail: m,
                isDate: true
            })
        }
        
    }

    handleSelectTime(e) {
        let m = this.state.movieDetail.filter(movie => (movie.filmTiming === e.target.value));

        this.setState({
            selectTime: e.target.value,
            movieDetail: m,
        });

        // console.log(m);

        MovieService.getMovieLayout(m[0].filmSessionId)
            .then(res => {
                this.setState({
                    seats: res.data,
                    movieDetail: m[0]
                })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    handleSelectSeat(e) {

        this.setState({
            selectSeat: this.state.seats[e.target.value]
        })
    }

    render() {
        const { movie, movieDetail, currentUser, seats, selectDate, selectTime, selectSeat } = this.state;
        console.log(movieDetail)
        console.log("Select Date: " + selectDate)
        console.log("Select Time: " + selectTime)
        console.log(seats)
        console.log(selectSeat)
        // console.log(selectDate)
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
                    ((!this.state.selectDate || this.state.selectDate === "none")) ? (
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
                                    </label><br/>
                                <select onChange={this.handleSelectSeat}>

                                    <option key="none" value="none">Select</option>
                                    {
                                        seats.map((seat, index) => (
                                            <option key={seat.seatNumber} value={index}>{seat.seatNumber}</option>
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
                            ticket: this.state.selectSeat,
                            movie: this.state.movieDetail
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
