package com.sadia2.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sadia2.quiz.entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
