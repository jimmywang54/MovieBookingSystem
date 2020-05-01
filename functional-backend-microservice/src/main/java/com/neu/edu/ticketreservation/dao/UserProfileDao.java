package com.neu.edu.ticketreservation.dao;

import java.util.List;

import com.neu.edu.ticketreservation.bean.UserProfile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileDao extends JpaRepository<UserProfile, Long>{

    List<UserProfile> findAll();

    @Query(value = "SELECT * FROM user_profile up WHERE up.id = ?1", nativeQuery = true)
    UserProfile getUserProfileFromUserBean(long userBeanId);
	
}