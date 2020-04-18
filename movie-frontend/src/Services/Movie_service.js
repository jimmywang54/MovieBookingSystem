
import axios from 'axios';
import authHeader from './Auth_header'

const API_URL = 'http://localhost:8080/';
// const API_URL = 'https://aa89f0d6-50e6-49f6-b956-fe68eb78bc12.mock.pstmn.io/';

class MovieService {


    /* /movies GET: Get list of all the movies stored in the db */
    async getAllMovies() {
        console.log(authHeader());
        
        axios({
            method: 'get',
            url: `http://localhost:8080/movies`,
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmM4NzU1OTg3QGdtYWlsLmNvbSIsImV4cCI6MTU4NzE5ODk5MiwiaWF0IjoxNTg3MTgwOTkyfQ.cyYTWaDATVWyK9CN5XoH477xkZdRc4V_8Bxf6uZ8Ffm48JLdMMPUlyqqkgMc-IiG4b5YFRVYK1Yy-RH0VokyuA'},
            withCredentials: true
        }).then(res => {
            console.log(res);
        })
        // return axios.get(API_URL + 'movies', {'Content-Type': 'application/json', 'headers': authHeader() })
        //     .then(res => {
        //         return res;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        
            
        // return ([
        //     { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", theatreId: 1},
        //     { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", theatreId: 1 },
        //     { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", theatreId: 2 }
        // ]);
    }

        
    

    /* /showDetailsFromMovie GET: Get which theatres and timings of a particular movie. Pass movieId as input */
    getMovieDetails(movieId) {
        // return axios.get(API_URL + 'showDetailsFromMovie', { movieId });

        var movies = [{ id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "10:00", theatreName: "AMC", filmSessionId: 121},
            { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "11:00", theatreName: "AMC", filmSessionId: 122 },
            { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "12:00", theatreName: "AMC", filmSessionId: 123 },
            { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "13:00", theatreName: "AMC", filmSessionId: 124},
            { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "14:00", theatreName: "AMC", filmSessionId: 125 },
            { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "15:00", theatreName: "AMC", filmSessionId: 126},
            { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "08:00", theatreName: "TW", filmSessionId: 127 },
            { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "09:00", theatreName: "TW", filmSessionId: 128},
            { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "10:00", theatreName: "TW", filmSessionId: 129}];
        return movies.filter(movie => movie.id === parseInt(movieId));
    }

    /* /getMovieLayout GET: Get available(unbooked) seats of a particular show by passing the above show details as input */
    getMovieLayout(movieDetail) {
        // return axios.get(API_URL + 'getMovieLayout', { movieDetail });
        return ["A1", "B2", "C1"]
    }

    /* /theatres GET: Get list of all theatres stored in db */
    getTheaters() {
        
        // return axios.get(API_URL + 'theatres', { 'headers': authHeader()})
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        return ([
            {id: 1, name: "AMC", address: "Alphonsus St", city: "Boston"},
            {id: 2, name: "TW", address: "tia", city: "Taiwan"}
        ]);
    }

    /* /bookTickets POST: book tickets by passing seat array in input and film session id in URL.
    Here the seats will get booked and the user will get charged using credit card. Also the transaction will be returned in output */
    bookTickets(movieId, seats) {
        return axios.post(API_URL + 'bookTickets', {
            movieId,
            seats
        })
    }
}

export default new MovieService();
