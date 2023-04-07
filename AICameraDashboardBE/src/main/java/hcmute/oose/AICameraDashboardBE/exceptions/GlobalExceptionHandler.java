package hcmute.oose.AICameraDashboardBE.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;


@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ExceptionCustom.class)
	public ResponseEntity<?> exceptionCustom(ExceptionCustom e) {
		return ResponseEntity.status(e.getStatus().value()).body(
				new ResponseDto(e.getStatus().toString(), e.getMessage(), ""));
	}
}
