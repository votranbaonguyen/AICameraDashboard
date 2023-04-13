package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;
import hcmute.oose.AICameraDashboardBE.services.cameraServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/camera")
public class cameraController {

    private final cameraServiceImpl cameraService;

    public cameraController(cameraServiceImpl cameraService) {
        this.cameraService = cameraService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addData(@Valid @RequestBody cameraDto cameraDto) throws ExceptionCustom {

        cameraService.addOrUpdateCamera(cameraDto);
        return new ResponseEntity<>
                (new ResponseDto("Add succeed", "Add camera name "+cameraDto.getCamName()+" success",
                        null), HttpStatus.OK);
    }

    @PostMapping("/video")
    public ResponseEntity<ResponseDto> getVideoData(@Valid @RequestBody String cameraId) {
        cameraDto myDto = new cameraDto();
        myDto = cameraService.getInfoCamera(cameraId);

        return new ResponseEntity<>(new ResponseDto("Infomation", "CameraIn4", myDto), HttpStatus.OK);
    }

}
