package com.sadia2.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sadia2.quiz.entity.Question;
import com.sadia2.quiz.service.QuestionService;
import com.sadia2.quiz.util.GenericResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService questionService;

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse addQuestion(@RequestBody Question question) {
		return questionService.addQuestion(question);
	}

	@RequestMapping(value = "/list", method = RequestMethod.POST, consumes = "application/json")
	public GenericResponse getAllQuestions() {
		return questionService.getAllQuestions();
	}

}
