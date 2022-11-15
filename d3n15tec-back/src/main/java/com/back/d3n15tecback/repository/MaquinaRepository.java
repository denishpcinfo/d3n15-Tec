package com.back.d3n15tecback.repository;

import com.back.d3n15tecback.model.Maquina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaquinaRepository extends JpaRepository<Maquina, Long> {

    void save(String infoIp);

}