

// const API_URL = 'http://localhost:8080/api/movies';

export function getAllMovies() {
    // return fetch(API_URL)
    //     .then(res => res.json())
    //     .then(movies => {
    //         return movies = movies.reduce((all, movie) => {
    //             all.push(movie);
    //             return all;
    //         }, []);
    //     });

    return ([
        { id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5},
        { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5 },
        { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5 }
    ]);
}


export function getMovieDetails(movieId) {
    var movies = [{ id: 1, name: "A Star is Born", imageName: "star.png", pricePerTicket: 10.5 },
        { id: 2, name: "God Father 1", imageName: "godfather.jpg", pricePerTicket: 11.5 },
        { id: 3, name: "Up", imageName: "up.jpg", pricePerTicket: 9.5 }];
    // console.log("Movie Id: " + movieId);
    // var movie = movies.filter(movie => movie.id === parseInt(movieId));
    // console.log(movie);
    return movies.filter(movie => movie.id === parseInt(movieId))[0];
}

