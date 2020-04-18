import React, { Component } from "react";
import AuthService from "../Services/Auth_service"
import UserService from "../Services/User_service";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            profile: UserService.getProfile()
        };
        console.log(this.state.currentUser)
    }

    render() {
        const { profile } = this.state;
        console.log(profile)
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Profile</h3>
                </header>
                {(profile ? (
                    <p>
                        <strong>Token:</strong>{" "}
                        {/* {currentUser.substring(0, 20)} ...{" "}
                        {currentUser.substr(currentUser.length - 20)} */}
                    </p>
                ) : (
                    <p>Upload Profile</p>
                ))}
                
            </div>
        );
    }
}