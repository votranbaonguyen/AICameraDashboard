package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;
import hcmute.oose.AICameraDashboardBE.services.cameraServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/camera")
public class cameraController {

    private final cameraServiceImpl cameraService;

    public cameraController(cameraServiceImpl cameraService) {
        this.cameraService = cameraService;
    }

    @PostMapping()
    public ResponseEntity<?> addData(@Valid @RequestBody cameraDto cameraDto) throws ExceptionCustom {

        cameraService.addCamera(cameraDto);
        return new ResponseEntity<>
                (new ResponseDto("Add succeed", "Add camera name "+cameraDto.getCamName()+" success",
                        cameraDto), HttpStatus.OK);
    }


    @GetMapping("/video")
    public ResponseEntity<ResponseDto> getVideoData(@RequestParam String id) {
        cameraDto dto = cameraService.getInfoCamera(id);
        if (dto == null){
            return new ResponseEntity<>
                    (new ResponseDto("Get data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/videos")
    public ResponseEntity<ResponseDto> getAllVideoData() {
        List<cameraDto> myCam = new ArrayList<>();
        myCam = cameraService.getAllCamera();
        return new ResponseEntity<>(new ResponseDto("Infomation", "CameraIn4", myCam), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateData(@RequestBody cameraDto dto) {

        boolean check = cameraService.updateCamera(dto);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Update data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Update data", "succeed", dto), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteData(@RequestParam String id) {

        boolean check = cameraService.removeCamera(id);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Delete data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Delete data", "succeed", null), HttpStatus.OK);
    }
}
