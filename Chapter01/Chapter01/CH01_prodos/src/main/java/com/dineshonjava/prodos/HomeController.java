/**
 * 
 */
package com.dineshonjava.prodos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Dinesh.Rajput
 *
 */
@RestController
public class HomeController {
	
	@GetMapping("/")
	String home(){
		return "Hello World!!!";
	}
}
