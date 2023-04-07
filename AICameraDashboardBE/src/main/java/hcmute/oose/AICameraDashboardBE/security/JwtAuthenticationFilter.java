package hcmute.oose.AICameraDashboardBE.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    // inject dependencies
    @Autowired
    private JwtTokenUtils jwtTokenUtils;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // get JWT (token) from http request
        String token = getJWTfromRequest(request);
        // validate token
        try {
			try {
				if(StringUtils.hasText(token) && jwtTokenUtils.validateToken(token)){
				    // get username from token
				    String email = jwtTokenUtils.getEmailFromJWT(token);
				    // load user associated with token
				    UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);

				    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				            userDetails, null, userDetails.getAuthorities()
				    );
				    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				    // set spring security
				    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
				}
			} catch (ExceptionCustom e) {
				// TODO Auto-generated catch block
//				e.printStackTrace();
			}
		} catch (UsernameNotFoundException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
		}
        filterChain.doFilter(request, response);
    }

    // Bearer <accessToken>
    private String getJWTfromRequest(HttpServletRequest request){
            String bearerToken = request.getHeader("Authorization");
            if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
                return bearerToken.substring(7, bearerToken.length());
            }
            return null;
    }

}