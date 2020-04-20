import React, { Component } from "react";
import { Button } from "react-bootstrap";
import MovieService from "../Services/Movie_service";


export default class PaymentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticket: [props.location.state.ticket],
            movie: props.location.state.movie
        }

        this.handlePaying = this.handlePaying.bind(this);
    }

    handlePaying(e) {
        MovieService.bookTickets(this.state.ticket)
            .then(res => {
                alert("Booking Successful");
                this.props.history.push("/");
                window.location.reload();
            })
            .catch(err => {
                alert("Transaction Failed. Need to add Credit Card Info.")
            })
    }

    render() {
        const { ticket, movie } = this.state;
        console.log("Credit Card: " + localStorage.getItem("isCC"))
        return(
            <div>
                <h2>Payment Page</h2>
                <p>Movie: {movie.filmName}</p>
                <p>Hall: {movie.hallName}</p>
                <p>Date: {movie.filmDate}</p>
                <p>Time: {movie.filmTiming}</p>
                <p>Seat: {ticket[0].seatNumber}</p>
                <p>Row: {ticket[0].rowIndex}</p>
                <p>Price: {ticket[0].price}</p>
                {
                    (localStorage.getItem("isCC") === null) ? (
                        <div>
                            <Button href='/profile'>Add Payment to buy ticket</Button>
                        </div>
                    ) : (
                        <Button onClick={this.handlePaying}>Confirm</Button>
                    )
                }
                
            </div>
        );
    }
}