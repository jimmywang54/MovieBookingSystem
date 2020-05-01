package com.neu.edu.ticketreservation.dao;

import com.neu.edu.ticketreservation.bean.movie.Ticket;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketDao extends CrudRepository<Ticket, Integer> {
		
}