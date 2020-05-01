package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.movie.Film;
import com.neu.edu.ticketreservation.bean.movie.Hall;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallDao extends CrudRepository<Hall, Integer> {

    List<Hall> findByFilm(Film film);

    Hall getHallByName(String name);


}