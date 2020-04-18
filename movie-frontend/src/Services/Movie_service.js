
import axios from 'axios';
import authHeader from './Auth_header'

const API_URL = 'http://localhost:8080/';
// const API_URL = 'https://aa89f0d6-50e6-49f6-b956-fe68eb78bc12.mock.pstmn.io/';

class MovieService {


    /* /theatres GET: Get list of all theatres stored in db */
    async getTheaters() {

        return axios.get(API_URL + 'theatres')
            .then(res => {
                console.log(res.data);
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })
    }


    /* /movies GET: Get list of all the movies stored in the db */
    getAllMovies() {
        // console.log(authHeader());

        return axios.get(API_URL + 'movies')
            .then(res => {
                console.log(res);
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })

    }

    async getMovieByTheatreId(thId) {
        console.log(thId);
        console.log(authHeader())

        return axios.get(API_URL + 'moviesFromTheatre/', {theatreId: thId},
            { headers: { 'Authorization': 'Bearer ' + authHeader() } })
            .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err.message);
        })

        // return ([
        //     {
        //         "filmId": 1,
        //         "name": "The Forever Purge",
        //         "description": "The fifth and final installment of 'The Purge' film series.",
        //         "genre": "Horror",
        //         "cast": [
        //             "Leven Rambin",
        //             "Ana de la Reguera"
        //         ]
        //     },
        //     {
        //         "filmId": 2,
        //         "name": "Tenet",
        //         "description": "An action epic revolving around international espionage, time travel, and evolution. Possibly about a man trying to prevent World War 3 through time travel and rebirth.",
        //         "genre": "Thriller",
        //         "cast": [
        //             "Robert Pattinson",
        //             "Elizabeth Debicki"
        //         ]
        //     },
        //     {
        //         "filmId": 3,
        //         "name": "Mulan",
        //         "description": "A young Chinese maiden disguises herself as a male warrior in order to save her father",
        //         "genre": "Action",
        //         "cast": [
        //             "Yifei Liu",
        //             "Donnie Yen"
        //         ]
        //     },
        //     {
        //         "filmId": 4,
        //         "name": "Wonder Woman 1984",
        //         "description": "A sequel to the 2017 superhero film 'Wonder Woman.",
        //         "genre": "Fantasy",
        //         "cast": [
        //             "Chris Pine",
        //             "Gal Gadot"
        //         ]
        //     },
        //     {
        //         "filmId": 5,
        //         "name": "A Quiet Place Part II",
        //         "description": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path",
        //         "genre": "Sci-Fi",
        //         "cast": [
        //             "Emily Blunt",
        //             "Cillian Murphy"
        //         ]
        //     },
        //     {
        //         "filmId": 6,
        //         "name": "Godzilla vs. Kong",
        //         "description": "As the gigantic Kong meets the unstoppable Godzilla, the world watches to see which one of them will become King of the Monsters.",
        //         "genre": "Thriller",
        //         "cast": [
        //             "Alexander Skarsgård",
        //             "Millie Bobby Brown"
        //         ]
        //     },
        //     {
        //         "filmId": 7,
        //         "name": "The King's Man",
        //         "description": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
        //         "genre": "Adventure",
        //         "cast": [
        //             "Harris Dickinson",
        //             "Ralph Fiennes"
        //         ]
        //     },
        //     {
        //         "filmId": 8,
        //         "name": "The SpongeBob Movie: Sponge on the Run",
        //         "description": "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
        //         "genre": "Animation",
        //         "cast": [
        //             "Keanu Reeves",
        //             "Awkwafina"
        //         ]
        //     },
        //     {
        //         "filmId": 9,
        //         "name": "No Time to Die",
        //         "description": "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        //         "genre": "Action",
        //         "cast": [
        //             "Ana de Armas",
        //             "Daniel Craig"
        //         ]
        //     },
        //     {
        //         "filmId": 1,
        //         "name": "The Forever Purge",
        //         "description": "The fifth and final installment of 'The Purge' film series.",
        //         "genre": "Horror",
        //         "cast": [
        //             "Leven Rambin",
        //             "Ana de la Reguera"
        //         ]
        //     },
        //     {
        //         "filmId": 5,
        //         "name": "A Quiet Place Part II",
        //         "description": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path",
        //         "genre": "Sci-Fi",
        //         "cast": [
        //             "Emily Blunt",
        //             "Cillian Murphy"
        //         ]
        //     }
        // ])
    }

        
    

    /* /showDetailsFromMovie GET: Get which theatres and timings of a particular movie. Pass movieId as input */
    async getMovieDetails(movieId) {
        // return axios.get(API_URL + 'showDetailsFromMovie', { movieId });

    //     var movies = [{ id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "10:00", theatreName: "AMC", filmSessionId: 121},
    //         { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "11:00", theatreName: "AMC", filmSessionId: 122 },
    //         { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5, filmDate: "Apr 20", filmTiming: "12:00", theatreName: "AMC", filmSessionId: 123 },
    //         { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "13:00", theatreName: "AMC", filmSessionId: 124},
    //         { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "14:00", theatreName: "AMC", filmSessionId: 125 },
    //         { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5, filmDate: "Apr 21", filmTiming: "15:00", theatreName: "AMC", filmSessionId: 126},
    //         { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "08:00", theatreName: "TW", filmSessionId: 127 },
    //         { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "09:00", theatreName: "TW", filmSessionId: 128},
    //         { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5, filmDate: "Apr 22", filmTiming: "10:00", theatreName: "TW", filmSessionId: 129}];
    //     return movies.filter(movie => movie.id === parseInt(movieId));

        return ([
            {
                "filmName": "Wonder Woman 1984",
                "hallName": "Hall A",
                "hallId": 1,
                "theatreName": "Regal Fenway And RPX",
                "theatreAddress": "201 Brookline Ave",
                "theatreId": 1,
                "theatreCity": "Boston",
                "filmDate": "2020-04-24",
                "filmTiming": "19:00",
                "filmSessionId": 4
            },
            {
                "filmName": "Wonder Woman 1984",
                "hallName": "Hall A",
                "hallId": 3,
                "theatreName": "AMC Boston Common 19",
                "theatreAddress": "175 Tremont St",
                "theatreId": 2,
                "theatreCity": "Boston",
                "filmDate": "2020-04-24",
                "filmTiming": "19:00",
                "filmSessionId": 13
            },
            {
                "filmName": "Wonder Woman 1984",
                "hallName": "Hall A",
                "hallId": 5,
                "theatreName": "ShowPlace ICON Boston",
                "theatreAddress": "60 Seaport Blvd UNIT 315",
                "theatreId": 3,
                "theatreCity": "Boston",
                "filmDate": "2020-04-24",
                "filmTiming": "19:00",
                "filmSessionId": 22
            },
            {
                "filmName": "Wonder Woman 1984",
                "hallName": "Hall A",
                "hallId": 7,
                "theatreName": "AMC South Bay Center 12",
                "theatreAddress": "25 District Ave",
                "theatreId": 4,
                "theatreCity": "Dorchester",
                "filmDate": "2020-04-24",
                "filmTiming": "19:00",
                "filmSessionId": 31
            },
            {
                "filmName": "Wonder Woman 1984",
                "hallName": "Hall A",
                "hallId": 9,
                "theatreName": "Coolidge Corner Theatre",
                "theatreAddress": "290 Harvard St",
                "theatreId": 5,
                "theatreCity": "Brookline",
                "filmDate": "2020-04-24",
                "filmTiming": "19:00",
                "filmSessionId": 40
            }
        ])
    }

    /* /getMovieLayout GET: Get available(unbooked) seats of a particular show by passing the above show details as input */
    async getMovieLayout(movieDetail) {
        // return axios.get(API_URL + 'getMovieLayout', { movieDetail });
        // return ["A1", "B2", "C1"]

        return ([
            {
                "seatNumber": 1,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 2,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 3,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 4,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 5,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 6,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 7,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 8,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 9,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 10,
                "rowIndex": 1,
                "price": 5
            },
            {
                "seatNumber": 11,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 12,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 13,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 14,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 15,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 16,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 17,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 18,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 19,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 20,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 21,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 22,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 23,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 24,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 25,
                "rowIndex": 2,
                "price": 8
            },
            {
                "seatNumber": 26,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 27,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 28,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 29,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 30,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 31,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 32,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 33,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 34,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 35,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 36,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 37,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 38,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 39,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 40,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 41,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 42,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 43,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 44,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 45,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 46,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 47,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 48,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 49,
                "rowIndex": 3,
                "price": 10
            },
            {
                "seatNumber": 50,
                "rowIndex": 3,
                "price": 10
            }
        ])
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
