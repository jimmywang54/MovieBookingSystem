import React, { Component } from "react";
import AuthService from "../Services/Auth_service"

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
            </div>
        );
    }
}