package com.neu.edu.adminticketreservation.service;

import java.util.ArrayList;

import com.neu.edu.adminticketreservation.bean.UserBean;
import com.neu.edu.adminticketreservation.bean.UserDTO;
import com.neu.edu.adminticketreservation.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final UserBean[] user = new UserBean[1];
		user[0] = userDao.findByUsername(username);
		if (user[0] == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user[0].getUsername(), user[0].getPassword(),
				new ArrayList<>());
	}
	
	public UserBean save(UserDTO user) {		
		final UserBean[] newUser = new UserBean[1];
		UserBean newUserFirst = new UserBean();
		newUserFirst.setUsername(user.getUsername());
		newUserFirst.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser[0] = userDao.save(newUserFirst);

		return newUser[0];
	}

	public UserBean findUser(String username) {
        return userDao.findByUsername(username);
    }
}