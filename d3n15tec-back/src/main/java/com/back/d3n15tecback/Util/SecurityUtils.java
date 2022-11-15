package com.back.d3n15tecback.Util;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;

public class SecurityUtils
{


    public static SimpleGrantedAuthority convertToAuthority(String role)
    {


        return new SimpleGrantedAuthority(formattedRole);
    }

    public static String extractAuthTokenFromRequest(HttpServletRequest request)
    {
        String bearerToken = request.getHeader(AUTH_HEADER);


    }
}