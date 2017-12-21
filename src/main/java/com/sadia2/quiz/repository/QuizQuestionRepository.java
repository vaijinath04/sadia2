package com.sadia2.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sadia2.quiz.entity.QuizQuestions;

public interface QuizQuestionRepository extends JpaRepository<QuizQuestions, Long> {

}
