package com.back.d3n15tecback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.PostConstruct;
import java.time.ZoneId;
import java.util.Date;
import java.util.TimeZone;

@SpringBootApplication
public class D3n15tecBackApplication implements WebMvcConfigurer {

	public static void main(String[] args) {

		SpringApplication.run(D3n15tecBackApplication.class, args);
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		registry.addMapping(")


		registry.addMapping("

		registry.addMapping("

		registry.addMapping("

		registry.addMapping("

	@PostConstruct
	public void init(){
		TimeZone.setDefault(TimeZone.getTimeZone(ZoneId.of("America/Sao_Paulo")));
		System.out.println("Spring boot application running in America/Sao_Paulo timezone :"+new Date());
	}

	@Bean
	public Gson getGson() {
		String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
		return new GsonBuilder().setDateFormat(DATE_FORMAT).disableHtmlEscaping().setPrettyPrinting().create();
	}
}
