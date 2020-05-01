package com.neu.edu.ticketreservation.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping({ "/health" })
	public ResponseEntity<Object> healthCheck() {
		String test="Health is ok";
        return ResponseEntity.ok(test);
	}


    
}