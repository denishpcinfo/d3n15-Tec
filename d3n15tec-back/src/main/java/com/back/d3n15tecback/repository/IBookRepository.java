package com.back.d3n15tecback.repository;

import com.back.d3n15tecback.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookRepository extends JpaRepository<Book, Long>
{
}
