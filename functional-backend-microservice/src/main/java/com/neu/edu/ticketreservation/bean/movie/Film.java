package com.neu.edu.ticketreservation.bean.movie;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "film")
public class Film {
    // Film [id, name, description, cast, genre]
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long filmId;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    @ElementCollection(targetClass=String.class)
    private Set<String> cast;

    @Column
    private String genre;

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

    public Set<String> getCast() {
        return cast;
    }

    public void setCast(Set<String> cast) {
        this.cast = cast;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}