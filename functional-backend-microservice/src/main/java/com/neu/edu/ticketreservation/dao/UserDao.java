package com.neu.edu.ticketreservation.dao;

import com.neu.edu.ticketreservation.bean.UserBean;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<UserBean, Integer> {
	
	UserBean findByUsername(String username);
	
}