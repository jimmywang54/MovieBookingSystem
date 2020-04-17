import React, { Component } from 'react';

class TheaterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theaterId: props.match.params.theaterId,
            theaters: props.theaters
        }
    }

    render() {

        console.log(this.state.theaters)
        console.log("Theater Id: " + this.state.theaterId)
        return (
            <div>
                {
                    this.state.theaters.filter(theater => theater.id === parseInt(this.state.theaterId))
                        .map(tt => (
                            <div key={tt.id}>{tt.name}</div>
                        ))
                }
            </div>
        )
    }
}


export default TheaterPage;
