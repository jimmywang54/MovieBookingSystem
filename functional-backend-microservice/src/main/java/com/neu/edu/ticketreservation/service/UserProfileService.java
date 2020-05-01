package com.neu.edu.ticketreservation.service;

import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.UserProfile;
import com.neu.edu.ticketreservation.dao.UserProfileDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

@Service
public class UserProfileService {
	
	@Autowired
	private UserProfileDao userProfileDao;

	@Autowired
	MeterRegistry registry;

	Timer userProfileTimer;
	
	public UserProfile save(UserProfile userProfile) {
		userProfileTimer = registry.timer("custom.metrics.timer", "Backend", "UserProfileSave");
		final UserProfile[] userProfileEntitiesSave = new UserProfile[1];
		userProfileTimer.record(() -> userProfileEntitiesSave[0] = userProfileDao.save(userProfile));
		UserProfile userProf = userProfileEntitiesSave[0];
		return userProf;
	}

	public UserProfile getFromUserBean(UserBean user) {
		userProfileTimer = registry.timer("custom.metrics.timer", "Backend", "UserProfileGet");
		final UserProfile[] userProfileEntitiesSave = new UserProfile[1];
		userProfileTimer.record(() -> userProfileEntitiesSave[0] = userProfileDao.getUserProfileFromUserBean(user.getId()));
		UserProfile userProf = userProfileEntitiesSave[0];
		return userProf;
	}
}