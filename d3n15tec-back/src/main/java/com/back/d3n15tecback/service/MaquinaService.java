package com.back.d3n15tecback.service;

import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletRequest;

@Service
public class MaquinaService {

    public String getInfoIp(HttpServletRequest request) {

        String infoIp = request.getHeader("x-forwarded-for");


}
