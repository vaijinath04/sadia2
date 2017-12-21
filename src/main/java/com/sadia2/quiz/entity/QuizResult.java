package com.sadia2.quiz.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_question")
public class QuizResult {
	private Long id;
	private int quizId;
	private int userId;
	private int addedBy;
	private Date addedOn;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "QUIZ_QUESTION_ID")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "QUIZ_ID")
	public int getQuizId() {
		return quizId;
	}

	public void setQuizId(int quizId) {
		this.quizId = quizId;
	}

	@Column(name = "ADDED_BY")
	public int getAddedBy() {
		return addedBy;
	}

	public void setAddedBy(int addedBy) {
		this.addedBy = addedBy;
	}

	@Column(name = "ADDED_ON")
	public Date getAddedOn() {
		return addedOn;
	}

	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}

}
