package com.sadia2.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sadia2.quiz.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String username);

}
