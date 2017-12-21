package com.sadia2.quiz.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sadia2.quiz.entity.Quiz;
import com.sadia2.quiz.entity.QuizQuestions;
import com.sadia2.quiz.repository.QuizQuestionRepository;
import com.sadia2.quiz.repository.QuizRepository;
import com.sadia2.quiz.util.GenericResponse;

@Service
@Transactional
public class QuizService {

	@Autowired
	private QuizRepository quizRepository;
	
	@Autowired
	private QuizQuestionRepository quizQuestionRepository;

	public GenericResponse addQuiz(Quiz quiz) {
		
		quiz = quizRepository.save(quiz);
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);

		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("quiz", quiz);
		response.setResponseObject(returnMap);
		return response;
	}

	public GenericResponse getAllQuizs() {
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);

		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("quizs", quizRepository.findAll());
		response.setResponseObject(returnMap);
		return response;
	}
	
	public GenericResponse publishQuiz(Quiz quiz) {
		
		List<Integer> questionsList = quiz.getQuestionsList();
		
		
		for(Integer question: questionsList){
			QuizQuestions quizQuestions = new QuizQuestions();
			quizQuestions.setQuestionId(question);
			quizQuestions.setQuizId(quiz.getId());
			quizQuestionRepository.save(quizQuestions);
		}
		quiz = quizRepository.findOne(quiz.getId());
		quiz = quizRepository.save(quiz);
		
		GenericResponse response = new GenericResponse();
		response.setResponseCode(200);

		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("quiz", quiz);
		response.setResponseObject(returnMap);
		return response;
	}
}
