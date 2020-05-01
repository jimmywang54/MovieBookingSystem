package com.neu.edu.ticketreservation.util;

import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.dao.UserDao;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class SecurityUtil {
    
    public UserBean getPrincipal(UserDao userDao) {
        User user = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		return userDao.findByUsername(user.getUsername());
    }
}