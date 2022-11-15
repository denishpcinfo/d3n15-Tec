package com.back.d3n15tecback.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "curtida_produto")
public class CurtidaProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique=true, nullable=false)
    private Long id;

}
