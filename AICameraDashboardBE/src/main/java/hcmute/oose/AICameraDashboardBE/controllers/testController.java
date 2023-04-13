package hcmute.oose.AICameraDashboardBE.controllers;

import java.security.Principal;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/test")
public class testController {
	@GetMapping
    public ResponseEntity<ResponseDto> sayHello(Principal principal) {

        return new ResponseEntity<>(new ResponseDto("Hello test", "", null), HttpStatus.OK);
    }
}
