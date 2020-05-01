package com.neu.edu.ticketreservation.bean.movie;

public class ShowDetails {

	private Film film;
    private Theatre theatre;
    private FilmSession filmSession;

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public Theatre getTheatre() {
        return theatre;
    }

    public void setTheatre(Theatre theatre) {
        this.theatre = theatre;
    }

    public FilmSession getFilmSession() {
        return filmSession;
    }

    public void setFilmSession(FilmSession filmSession) {
        this.filmSession = filmSession;
    }

    @Override
    public String toString() {
        return "ShowDetails [film=" + film.getName() + ", Time=" + filmSession.getTime()+ ", Hall=" + filmSession.getHall().getName() + ", theatre=" + theatre.getName() + "]";
    }

    
    


}