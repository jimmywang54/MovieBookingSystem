package com.neu.edu.adminticketreservation.dao;

import com.neu.edu.adminticketreservation.bean.UserBean;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<UserBean, Integer> {
	
	UserBean findByUsername(String username);
	
}