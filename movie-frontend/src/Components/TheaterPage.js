import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TheaterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theatreId: props.match.params.theatreId,
            theaters: props.theaters
        }
    }

    render() {
        console.log(this.state.theaters)
        console.log("Theater Id: " + this.state.theatreId)
        return (
            <div>
                {
                    this.state.theaters.filter(theater => theater.theatreId === parseInt(this.state.theatreId))
                        .map(tt => (
                            <div key={tt.theatreId}>
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
