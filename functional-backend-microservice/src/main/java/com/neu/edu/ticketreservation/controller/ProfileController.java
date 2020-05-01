package com.neu.edu.ticketreservation.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import com.neu.edu.ticketreservation.bean.CreditCardDetails;
import com.neu.edu.ticketreservation.bean.UserBean;
import com.neu.edu.ticketreservation.bean.UserProfile;
import com.neu.edu.ticketreservation.bean.movie.FilmSession;
import com.neu.edu.ticketreservation.bean.movie.Ticket;
import com.neu.edu.ticketreservation.bean.movie.Transaction;
import com.neu.edu.ticketreservation.bean.wrapper.TransactionWrapper;
import com.neu.edu.ticketreservation.bean.wrapper.UserProfileWrapper;
import com.neu.edu.ticketreservation.dao.UserDao;
import com.neu.edu.ticketreservation.service.MovieService;
import com.neu.edu.ticketreservation.service.StripeService;
import com.neu.edu.ticketreservation.service.UserProfileService;
import com.neu.edu.ticketreservation.util.SecurityUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.micrometer.core.instrument.MeterRegistry;

@RestController
public class ProfileController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserDao userDao;

	@Autowired
	private UserProfileService userProfileService;

	@Autowired
	private StripeService stripeService;

	@Autowired
	private SecurityUtil securityUtil;

	@Autowired
	private MovieService movieService;
	
	@Autowired
	MeterRegistry registry;

	@PostMapping(path = "/v1/profile")
	public ResponseEntity<Object> createUserProfile(Authentication authentication,
			@Valid @RequestBody UserProfile userProfile) {
		registry.counter("custom.metrics.counter", "ApiCall", "ProfilePost").increment();
		logger.info("Post mapping for profile");
		UserBean userBean = securityUtil.getPrincipal(userDao);
		if(userBean ==null){
			logger.error("No user found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		userProfile.setUser(userBean);
		userProfileService.save(userProfile);
		logger.info("User Profile Saved:" + userProfile.getFirstName()+"  "+userProfile.getLastName());
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping(path = "/v1/profile", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getUserProfile(Authentication authentication ) {
		registry.counter("custom.metrics.counter", "ApiCall", "ProfileGet").increment();
		logger.info("Get mapping for profile");
		UserBean userBean = securityUtil.getPrincipal(userDao);
		if(userBean ==null){
			logger.error("No user found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		UserProfile userProfile = userProfileService.getFromUserBean(userBean);
		if (userProfile ==null || userProfile.getFirstName().equals("")){
			logger.error("User profile not updated");
			return new ResponseEntity<>("Porfile details not updated. Please update.", HttpStatus.BAD_REQUEST);
		}
		logger.info("Got User profile from db: "+userProfile.getFirstName());
		UserProfileWrapper profileWrapper = new UserProfileWrapper();
		return new ResponseEntity<>(profileWrapper.copyFromUser(userProfile), HttpStatus.CREATED);
	}

	@PostMapping(path = "/v1/addPayment")
	public ResponseEntity<Object> addPaymentMethod(Authentication authentication,
			@Valid @RequestBody CreditCardDetails creditCardDetails) {
		registry.counter("custom.metrics.counter", "ApiCall", "AddPaymentPost").increment();
		logger.info("Post mapping for adding card");
		UserBean userBean = securityUtil.getPrincipal(userDao);
		if(userBean ==null){
			logger.error("No user found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		UserProfile userProfile = userProfileService.getFromUserBean(userBean);
		if (userProfile ==null || userProfile.getFirstName().equals("")){
			logger.error("User profile not updated");
			return new ResponseEntity<>("Porfile details not updated. Please update.", HttpStatus.BAD_REQUEST);
		}

		if(userProfile.isPaymentMethodAdded()){
			logger.error("Payment already added");
			return new ResponseEntity<>("Payment method already exists" ,HttpStatus.BAD_REQUEST);
		}

		String customerId = stripeService.addCardToCustomer(userBean, userProfile, creditCardDetails);
		logger.info("Stripe customer id::" + customerId);
		if(customerId ==null){
			logger.error("Couldnt attach card to customer");
			return new ResponseEntity<>("Error attaching card to customer" ,HttpStatus.BAD_REQUEST);
		}

		userProfile.setStripeCustomerId(customerId);
		userProfile.setPaymentMethodAdded(true);
		userProfileService.save(userProfile);
		logger.info("Updating profile with stripe customer id");

		return new ResponseEntity<>("Successfully attached card to customer" ,HttpStatus.OK);
	}

	@GetMapping(path = "/v1/history")
	public ResponseEntity<Object> addPaymentMethod(Authentication authentication) {
		registry.counter("custom.metrics.counter", "ApiCall", "UserHistoryGet").increment();
		logger.info("Get mapping history");
		UserBean userBean = securityUtil.getPrincipal(userDao);
		if(userBean ==null){
			logger.error("No user found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		logger.info("Gettling list of transactions");
		List<Transaction> transactionList = movieService.getPastTransactions(userBean);
		List<TransactionWrapper> transactionWrappers = new ArrayList<TransactionWrapper>();
        for (Transaction t : transactionList) {
			TransactionWrapper tw = new TransactionWrapper();
			Set<Ticket> tickets = t.getTickets();
			Iterator<Ticket> iter = tickets.iterator();
			Ticket first = (Ticket)iter.next();
			FilmSession filmSession = first.getFilmSession();
            transactionWrappers.add(tw.copyFromTransaction(t, filmSession));
		}
		logger.info("List of transactions obtained::::"+transactionWrappers.size());

		return new ResponseEntity<>(transactionWrappers ,HttpStatus.OK);
	}

}