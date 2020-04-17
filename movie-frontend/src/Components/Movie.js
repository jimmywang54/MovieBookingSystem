import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import AuthService from '../Services/Auth_service';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie,
            currentUser: AuthService.getCurrentUser()
        }
    }


    render() {
        const { movie, currentUser } = this.state;
        console.log(movie);
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"images/" + movie.imageName} alt="movie-photo" />
                <Card.Body>
                    <Card.Title>{movie.filmName}</Card.Title>
                </Card.Body>
                {currentUser ? (
                        <Link to={'/bookingPage/' + movie.id}>
                        <Button variant="primary" >Book</Button>{' '}
                    </Link>
                ) : (
                        <Link to='/login'>
                            <Button variant="primary" >Login to Book</Button>{' '}
                        </Link>
                    )}
            </Card>


            </div>
        )
    }
}


export default Movie;
