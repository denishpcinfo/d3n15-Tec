package com.back.d3n15tecback.service;

import com.back.d3n15tecback.model.Book;

import java.util.List;

public interface IBookService
{
    Book saveBook(Book book);

    void deleteBook(Long id);

    List<Book> findAllBooks();
}
