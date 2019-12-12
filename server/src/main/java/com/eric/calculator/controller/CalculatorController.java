package com.eric.calculator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @Autowired
	com.eric.calculator.controller.Total total;
		
	@GetMapping("/total")
	public ResponseEntity<String> getTotal() {
		ResponseEntity<String> response =  ResponseEntity.ok(total.getTotal());
		return response;	
	}
	
	@GetMapping("/previous")
	public ResponseEntity<String> getPrevious() {
		ResponseEntity<String> response =  ResponseEntity.ok(total.getPrevious());
		return response;	
	}
	@PostMapping("/newtotal")
	public ResponseEntity<String> setTotal(@RequestParam(name = "newTotal") String newTotal){
		total.setTotal(newTotal);
		ResponseEntity<String> response =  ResponseEntity.ok(total.getTotal());
		return response;	
	}
}
