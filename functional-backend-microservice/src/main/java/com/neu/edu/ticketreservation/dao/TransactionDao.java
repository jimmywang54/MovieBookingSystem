package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.movie.Transaction;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionDao extends CrudRepository<Transaction, Integer> {

    List<Transaction> findByUserBean(UserBean userBean);
}