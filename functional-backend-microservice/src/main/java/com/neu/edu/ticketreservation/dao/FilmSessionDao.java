package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.movie.Film;
import com.neu.edu.ticketreservation.bean.movie.FilmSession;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmSessionDao extends CrudRepository<FilmSession, Integer> {

    List<FilmSession> findByFilm(Film film);

    FilmSession getFilmByFilmSessionId(long filmSessionId);

    @Query(value = "select f.* from film f, film_session fs, hall h, theatre t where f.film_id = fs.film_id and fs.hall_id = h.hall_id and h.theatre_id = t.theatre_id and t.theatre_id=?1", nativeQuery = true)
    List<FilmSession> getMoviesFromTheatre(long theatreId);

}