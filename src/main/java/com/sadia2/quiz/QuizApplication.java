package com.sadia2.quiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;


@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = { "com.sadia2.quiz..controller",
		"com.sadia2.quiz.dao",
		"com.sadia2.quiz.service",
		"com.sadia2.quiz.util"})
@EntityScan("com.sadia2.quiz.entity")
@EnableJpaRepositories("com.sadia2.quiz.repository")
public class QuizApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(QuizApplication.class, args);
	}
	
}
