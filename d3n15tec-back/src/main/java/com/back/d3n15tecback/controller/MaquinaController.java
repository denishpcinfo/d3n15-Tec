package com.back.d3n15tecback.controller;

import com.back.d3n15tecback.model.Maquina;
import com.back.d3n15tecback.repository.MaquinaRepository;
import com.back.d3n15tecback.service.MaquinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/api/maquina")
public class MaquinaController {

    @Autowired
    MaquinaRepository maquinaRepository;

    @Autowired
    MaquinaService maquinasService;

    @PostMapping//api/maquina
    public ResponseEntity<?> salvar(HttpServletRequest request) {

        Maquina maquinas = new Maquina();


    }
}