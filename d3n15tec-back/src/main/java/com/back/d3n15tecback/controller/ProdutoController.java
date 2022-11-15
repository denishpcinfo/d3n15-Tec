package com.back.d3n15tecback.controller;

import com.back.d3n15tecback.model.Produto;
import com.back.d3n15tecback.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Produto produto)
    {
        return new ResponseEntity<>(produtoService.salvarProduto(produto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> buscarProdutosInicial()
    {
        return ResponseEntity.ok(produtoService.buscarProdutosInicial());
    }

}
