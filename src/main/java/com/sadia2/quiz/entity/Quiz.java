package com.sadia2.quiz.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "quiz")
public class Quiz {
	private Long id;
	private String name;
	private int totalQuestion;
	private int totalTime;
	private int addedBy;
	private Date addedOn;
	
	private List<Integer> questionsList;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "QUIZ_ID")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "NAME")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "TOTAL_QTN")
	public int getTotalQuestion() {
		return totalQuestion;
	}

	public void setTotalQuestion(int totalQuestion) {
		this.totalQuestion = totalQuestion;
	}

	@Column(name = "TOTAL_TIME")
	public int getTotalTime() {
		return totalTime;
	}

	public void setTotalTime(int totalTime) {
		this.totalTime = totalTime;
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

	@Transient
	public List<Integer> getQuestionsList() {
		return questionsList;
	}

	public void setQuestionsList(List<Integer> questionsList) {
		this.questionsList = questionsList;
	}
	
	

}
