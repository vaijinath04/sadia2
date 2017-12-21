package com.sadia2.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sadia2.quiz.entity.Question;

public interface QuestionRepository  extends JpaRepository<Question, Long>{

}
