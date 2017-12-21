package com.sadia2.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sadia2.quiz.entity.Quiz;
import com.sadia2.quiz.service.QuizService;
import com.sadia2.quiz.util.GenericResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quiz")
public class QuizController {
	@Autowired
	private QuizService quizService;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse addQuiz(@RequestBody Quiz quiz) {
		return quizService.addQuiz(quiz);
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse getAllQuizs() {
		return quizService.getAllQuizs();
	}
	
	@RequestMapping(value = "/publish", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse publishQuiz(@RequestBody Quiz quiz) {
		return quizService.publishQuiz(quiz);
	}
}
