package com.sadia2.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sadia2.quiz.entity.User;
import com.sadia2.quiz.service.UserService;
import com.sadia2.quiz.util.GenericResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse registerUser(@RequestBody User user){
		return userService.registerUser(user);
		
	}
	
	@RequestMapping(value = "/list", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse getUserList(){
		return userService.getUserList();
		
	}

}
