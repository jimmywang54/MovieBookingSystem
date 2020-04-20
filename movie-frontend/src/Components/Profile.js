import React, { Component } from "react";
import AuthService from "../Services/Auth_service"
import UserService from "../Services/User_service";

import {Link } from "react-router-dom";

import { Form, Row, Col, Button } from 'react-bootstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined,
            isProfile: false,
            firstName: "",
            lastName: "",
            history: undefined
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        console.log(user);
        if (user) {
            this.setState({
                currentUser: user
            })
        }

        UserService.getProfile()
            .then(res => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    isProfile: true
                });
            })
            .catch(err => {
                console.log(err.message);
            })


        UserService.getHistory()
            .then(res => {
                this.setState({
                    
                    history: res
                })
            })
            .catch(err => console.log(err)); 
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })

        UserService.saveProfile(this.state.firstName, this.state.lastName)
            .then(() => {
                this.setState({
                    isProfile: true
                })
            })
    }

    render() {
        const { isProfile, history } = this.state;
        console.log(history)
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Profile</h3>
                </header>
                {(isProfile ? (
                    <div>
                        <h3>First Name: </h3>
                        {this.state.firstName} <br/>
                        <h3>Last Name: </h3>
                        {this.state.lastName}<br/>
                        <Link to='/creditcard'>
                            <Button>Add Credit Card</Button>
                        </Link>
                        
                    </div>
                ) : (
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Control 
                                        type="text"
                                        name="firstname"
                                        value={this.state.firstName}
                                        onChange={this.onChangeFirstName}
                                        placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="lastname"
                                        value={this.state.lastName}
                                        onChange={this.onChangeLastName}
                                        placeholder="Last name" />
                                </Col>
                            </Row><br/>
                            <Button type='submit'>Upload Profile</Button>
                        </Form>
                    ))}

                <div>
                    <br></br>
                    <h3>User History</h3>
                    {
                        this.state.history && (
                            <ul>
                                {
                                    this.state.history.map(h => (
                                    <li key={h.transactionId}>{h.transactionId} - Movie: <b>{h.filmName}</b> - Theatre: <b>{h.theatreName}</b> - Price: <b>{h.totalPrice}</b></li>
                                    ))
                                }
                            </ul>
                        )
                        
                        
                    }
                </div>

            </div>
        );
    }
}