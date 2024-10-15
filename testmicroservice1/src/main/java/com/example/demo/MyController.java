package com.example.demo;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
public class MyController {
	
	@GetMapping("/greeting")
	public ResponseEntity<?> greeting(){
		return ResponseEntity.ok("Hello");
	}
	
	@CrossOrigin(origins = {"http://localhost:3000", "http://node-server:3000"})
	@GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name,
                           @RequestParam(value = "lastName", defaultValue = "World") String lastname) {
        return String.format("Hello %s %s!", name,lastname);
    }
}
