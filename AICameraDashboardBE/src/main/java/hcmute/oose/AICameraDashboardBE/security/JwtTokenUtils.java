package hcmute.oose.AICameraDashboardBE.security;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;

import java.util.Date;

@Component
public class JwtTokenUtils {

    @Value("${jwt.secret}")
    private String jwtSecret;

    private int jwtExpirationInMs = 6 * 60 * 60 * 1000;

    // generate token
    public String generateToken(Authentication authentication){
        String username = authentication.getName();
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + jwtExpirationInMs);

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
        return token;
    }

    // get username from the token
    public String getEmailFromJWT(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    // validate JWT token
    public boolean validateToken(String token) throws ExceptionCustom{
        try{
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            throw new ExceptionCustom(HttpStatus.BAD_REQUEST, "Invalid JWT signature.");
        } catch (MalformedJwtException ex) {
            throw new ExceptionCustom(HttpStatus.BAD_REQUEST, "Invalid JWT token.");
        } catch (ExpiredJwtException ex) {
            throw new ExceptionCustom(HttpStatus.BAD_REQUEST, "Expired JWT token.");
        } catch (UnsupportedJwtException ex) {
            throw new ExceptionCustom(HttpStatus.BAD_REQUEST, "Unsupported JWT token.");
        } catch (IllegalArgumentException ex) {
            throw new ExceptionCustom(HttpStatus.BAD_REQUEST, "JWT claims string is empty.");
        }
    }

}