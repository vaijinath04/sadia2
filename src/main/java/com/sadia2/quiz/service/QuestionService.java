package com.sadia2.quiz.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sadia2.quiz.entity.Question;
import com.sadia2.quiz.repository.QuestionRepository;
import com.sadia2.quiz.util.GenericResponse;

@Service
@Transactional
public class QuestionService {

	@Autowired
	private QuestionRepository questionRepository;

	public GenericResponse addQuestion(Question question) {
		question = questionRepository.save(question);
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);

		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("question", question);
		response.setResponseObject(returnMap);
		return response;
	}
	
	public GenericResponse getAllQuestions(){
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);

		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("questions", questionRepository.findAll());
		response.setResponseObject(returnMap);
		return response;
	}
}
