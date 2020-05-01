package com.neu.edu.ticketreservation.service;

import java.util.ArrayList;

import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.UserDTO;
import com.neu.edu.ticketreservation.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	MeterRegistry registry;

	Timer userTimer;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		userTimer = registry.timer("custom.metrics.timer", "Backend", "UserGet");
		final UserBean[] user = new UserBean[1];
		userTimer.record(()-> user[0] = userDao.findByUsername(username));
		if (user[0] == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user[0].getUsername(), user[0].getPassword(),
				new ArrayList<>());
	}
	
	public UserBean save(UserDTO user) {
		userTimer = registry.timer("custom.metrics.timer", "Backend", "UserSave");
		
		final UserBean[] newUser = new UserBean[1];
		UserBean newUserFirst = new UserBean();
		newUserFirst.setUsername(user.getUsername());
		newUserFirst.setPassword(bcryptEncoder.encode(user.getPassword()));
		userTimer.record(()-> newUser[0] = userDao.save(newUserFirst));

		return newUser[0];
	}

	public UserBean findUser(String username) {
        return userDao.findByUsername(username);
    }
}