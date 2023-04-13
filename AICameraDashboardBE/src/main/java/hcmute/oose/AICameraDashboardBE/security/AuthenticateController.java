package hcmute.oose.AICameraDashboardBE.security;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;

@RestController
@RequestMapping("/api/")
public class AuthenticateController {
	
	@Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtils jwtTokenUtils;

    @PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody AccountRequest accountRequest) throws ExceptionCustom{
		Authentication authentication = null;
		try {
			authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(accountRequest.getEmail(), accountRequest.getPassword()));
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new ExceptionCustom(HttpStatus.UNAUTHORIZED, "Can not authenticate this account: " + accountRequest.getEmail() +": ps: "+accountRequest.getPassword() );
		}


		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtTokenUtils.generateToken(authentication);

		JwtAccountDetails accountDetails = (JwtAccountDetails) authentication.getPrincipal();
		List<String> roles = accountDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return new ResponseEntity<>(new AccountResponse(jwt,
				accountDetails.getUsername(),
				roles), HttpStatus.OK);
	}
}
