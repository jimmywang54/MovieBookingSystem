package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.movie.Row;
import com.neu.edu.ticketreservation.bean.movie.Seat;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatDao extends CrudRepository<Seat, Integer> {

    List<Seat> findByRow(Row row);

    Seat findBySeatId(long seatId);
}