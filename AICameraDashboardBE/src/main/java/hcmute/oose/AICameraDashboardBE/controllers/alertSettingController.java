package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import hcmute.oose.AICameraDashboardBE.dtos.alertSettingDto;
import hcmute.oose.AICameraDashboardBE.services.alertSettingServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/alertsetting")
public class alertSettingController {

    private final alertSettingServiceImpl alertSettingService;

    public alertSettingController(alertSettingServiceImpl alertSettingService) {
        this.alertSettingService = alertSettingService;
    }

    @PostMapping()
    public ResponseEntity<?> addData(@Valid @RequestBody alertSettingDto dto) {

        alertSettingService.addAlertST(dto);

        return new ResponseEntity<>
                (new ResponseDto("Add Data", "Succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllData() {

        List<alertSettingDto> dtos = alertSettingService.getAllAlertST();
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dtos), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<?> getDataById(@RequestParam String id) {

        alertSettingDto dto = alertSettingService.getOneAlertST(id);
        if (dto == null){
            return new ResponseEntity<>
                    (new ResponseDto("Get data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateData(@RequestBody alertSettingDto dto) {

        boolean check = alertSettingService.updateAlertST(dto);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Update data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Update data", "succeed", dto), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteData(@RequestParam String id) {

        boolean check = alertSettingService.deleteAlertST(id);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Delete data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Delete data", "succeed", null), HttpStatus.OK);
    }
}
