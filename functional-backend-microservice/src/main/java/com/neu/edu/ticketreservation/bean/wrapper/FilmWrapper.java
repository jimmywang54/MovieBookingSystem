package com.neu.edu.ticketreservation.bean.wrapper;

import java.util.Set;

import com.neu.edu.ticketreservation.bean.movie.Film;

public class FilmWrapper {

    private long filmId;

    private String name;

    private String description;

    private String genre;

    private Set<String> cast;

    public FilmWrapper copyFromFilm(Film film){
        this.filmId = film.getFilmId();
        this.name = film.getName();
        this.description = film.getDescription();
        this.genre = film.getGenre();
        this.cast = film.getCast();
        return this;
    }

    public long getFilmId() {
        return filmId;
    }

    public void setFilmId(long filmId) {
        this.filmId = filmId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Set<String> getCast() {
        return cast;
    }

    public void setCast(Set<String> cast) {
        this.cast = cast;
    } 
}