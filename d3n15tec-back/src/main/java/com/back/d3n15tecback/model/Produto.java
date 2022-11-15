package com.back.d3n15tecback.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique=true, nullable=false)
    private Long id;

    @Column(name = "name", nullable = true, length = 100)
    private String name;

    @OneToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "foto")
    private Anexo foto;

    @Column(name = "descricao", nullable = true, length = 200)
    private String descricao;

    @Column(name = "preco_compra", nullable = true)
    private BigDecimal precoCompra;

    @Column(name = "preco_venda", nullable = true)
    private BigDecimal precoVenda;

    @Column(name = "quantidade", nullable = true)
    private Integer quantidade;

    @Column(name = "disponivel", nullable = true)
    private Boolean disponivel;

    @Column(name = "validade_produto", nullable = true)
    private LocalDateTime validadeProduto;

    @Enumerated(EnumType.STRING)
    @Column(name = "categoria_produto_id", nullable = true)
    private CategoriaProduto categoriaProduto;

    @Column(name = "totalVendas", nullable = true)
    private Integer totalVendas;

    @Column(name = "create_time", nullable = true)
    private LocalDateTime createTime;

    @Column(name = "modify_time", nullable = true)
    private LocalDateTime modifyTime;



}
