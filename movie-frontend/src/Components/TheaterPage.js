import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TheaterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theaterId: props.match.params.theaterId,
            theaters: props.theaters
        }
    }

    render() {
        // console.log(this.state.theaters)
        // console.log("Theater Id: " + this.state.theaterId)
        return (
            <div>
                {
                    this.state.theaters.filter(theater => theater.id === parseInt(this.state.theaterId))
                        .map(tt => (
                            <div key={tt.id}>
                            <div>{tt.name}</div>
                            {
                                <Link to={{
                                    pathname: '/movies',
                                    state: {
                                        theater: tt
                                    }
                                    }}> <Button>Get Tickets</Button></Link>
                            }
                            </div>
                        ))
                }
                
            </div>
        )
    }
}


export default TheaterPage;
