import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Movie extends Component {
    state = {
        movieId: undefined,
        movieName: undefined,
        imageName: undefined
    }

    componentDidMount() {
        this.setState({
            movieId: this.props.movieId,
            movieName: this.props.movieName,
            imageName: this.props.imageName
        })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"images/" + this.state.imageName} />
                <Card.Body>
                    <Card.Title>{this.state.movieName}</Card.Title>
                </Card.Body>
                <Button size="lg"
                    href={this.props.isSignin ?
                        "/bookingPage/" + this.state.movieId :
                        "/login"}>
                    Book
                </Button>
            </Card>
        )
    }
}


export default Movie;
