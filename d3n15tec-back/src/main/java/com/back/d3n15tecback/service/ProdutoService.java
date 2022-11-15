package com.back.d3n15tecback.service;

import com.back.d3n15tecback.model.Produto;
import com.back.d3n15tecback.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;


    public Produto salvarProduto(Produto produto)
    {
        return produtoRepository.save(produto);
    }

    public List<Produto> buscarProdutosInicial()
    {
        return produtoRepository.findAll();
    }

}
