import React, { Component } from "react";
import { Button } from "react-bootstrap";
import MovieService from "../Services/Movie_service";


export default class PaymentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticket: props.location.state.ticket,
            movie: props.location.state.movie
        }

        this.handlePaying = this.handlePaying.bind(this);
    }

    handlePaying(e) {
        MovieService.bookTickets(this.state.ticket)
            .then()
    }

    render() {
        const { ticket, movie } = this.state;
        return(
            <div>
                <h2>Payment Page</h2>
                <p>Movie: {movie.filmName}</p>
                <p>Hall: {movie.hallName}</p>
                <p>Date: {movie.filmDate}</p>
                <p>Time: {movie.filmTiming}</p>
                <p>Seat: {ticket.seatNumber}</p>
                <p>Row: {ticket.rowIndex}</p>
                <p>Price: {ticket.price}</p>

                <Button onClick={this.handlePaying}>Confirm</Button>
            </div>
        );
    }
}