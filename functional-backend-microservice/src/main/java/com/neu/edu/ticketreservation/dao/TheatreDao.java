package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.movie.Theatre;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheatreDao extends CrudRepository<Theatre, Integer> {
	    
    List<Theatre> findAll();
	
}