
import axios from 'axios';

// const API_URL = 'http://localhost:8080/';
const API_URL = 'https://aa89f0d6-50e6-49f6-b956-fe68eb78bc12.mock.pstmn.io/';

class MovieService {


    /* /movies GET: Get list of all the movies stored in the db */
    getAllMovies() {
        // return axios.get(API_URL + 'movies');
            
        return ([
            { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20"},
            { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21" },
            { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22" }
        ]);
    }

        
    

    /* /showDetailsFromMovie GET: Get which theatres and timings of a particular movie. Pass movieId as input */
    getMovieDetails(movieId) {
        // return axios.get(API_URL + 'showDetailsFromMovie', { movieId });

        var movies = [{ id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", times: ["10:00", "11:00", "12:00"] },
            { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", times: ["13:00", "15:00", "17:00"]},
            { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", times: ["08:00", "09:00", "10:00"] }];
        return movies.filter(movie => movie.id === parseInt(movieId))[0];
    }

    /* /getMovieLayout GET: Get available(unbooked) seats of a particular show by passing the above show details as input */
    getMovieLayout(movieDetail) {
        // return axios.get(API_URL + 'getMovieLayout', { movieDetail });
        
    }

    /* /theatres GET: Get list of all theatres stored in db */
    getTheaters() {
        // return axios.get(API_URL + 'theatres');

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
