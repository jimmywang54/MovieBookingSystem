import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class User extends Component {

    render() {
        // console.log(this.props.isSignin);
        return (
            <div>
                {
                    (!this.props.isSignin &&
                        <Redirect to="/signinPage"></Redirect>
                    )
                }
                <p>Hi, this is user page.</p>
            </div>
        )

    }
}


export default User;
