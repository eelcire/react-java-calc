package com.eric.calculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
public class CalculatorController {

    @Autowired
    Total total;
		
	@GetMapping("/total")
	public ResponseEntity<Double> getTotal() {		
		ResponseEntity<Double> response =  ResponseEntity.ok(total.getTotal());
		return response;	
	}
	
	@GetMapping("/previous")
	public ResponseEntity<Double> getPrevious() {		
		ResponseEntity<Double> response =  ResponseEntity.ok(total.getPrevious());
		return response;	
	}
	@PostMapping("/newtotal")
	public ResponseEntity<Double> setTotal(@RequestParam(name = "newTotal") Double newTotal){	
		total.setTotal(newTotal);
		ResponseEntity<Double> response =  ResponseEntity.ok(total.getTotal());
		return response;	
	}
}
