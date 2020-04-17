import React, { Component } from 'react';

class TheaterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theaterId: props.match.params.theaterId
        }
    }

    render() {
        console.log(this.state.theaterId)
        return (
            <div>
                {
                    this.state.theaterId
                    // this.state.theaters.filter(this.state.theater.theaterId === this.state.theaterId)
                    //     .map(theater => (
                    //         <div>theater.name</div>
                    //     ))
                }
            </div>
        )
    }
}


export default TheaterPage;
