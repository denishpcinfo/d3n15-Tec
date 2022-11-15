package com.back.d3n15tecback.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Maquina {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String infoip;

    public Maquina(String infoip) {
        this.infoip = infoip;
    }

    public Maquina() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInfoip() {
        return infoip;
    }

    public void setInfoip(String infoip) {
        this.infoip = infoip;
    }
}