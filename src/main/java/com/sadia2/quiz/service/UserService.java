package com.sadia2.quiz.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sadia2.quiz.entity.User;
import com.sadia2.quiz.repository.UserRepository;
import com.sadia2.quiz.util.GenericResponse;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public GenericResponse registerUser(User user) {
		//user.setPassword(getPasswordEncoder().encode(user.getPassword()));
		user = userRepository.save(user);
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);
//		user.setPassword("");
		
		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("user", user);
		response.setResponseObject(returnMap);
		return response;
	}
	

	
	@Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

	public void save(User user) {
		user.setPassword(getPasswordEncoder().encode(user.getPassword()));
		userRepository.save(user);
	}
	
	public GenericResponse getUserList(){
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);
		
		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("users", userRepository.findAll());
		response.setResponseObject(returnMap);
		return response;
	}
	
	
	
}
