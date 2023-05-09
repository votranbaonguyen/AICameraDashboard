package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.services.alertServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/alert")
public class alertController {

    private final alertServiceImpl alertService;

    public alertController(alertServiceImpl alertService) {
        this.alertService = alertService;
    }

    @PostMapping()
    public ResponseEntity<?> addData(@Valid @RequestBody alertDto dto) {

        alertService.addAlert(dto);

        return new ResponseEntity<>
                (new ResponseDto("Add Data", "Succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllData() {

        List<alertDto> dtos = alertService.getAllAlert();
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dtos), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<?> getDataById(@RequestParam String id) {

        alertDto dto = alertService.getOneAlert(id);
        if (dto == null){
            return new ResponseEntity<>
                    (new ResponseDto("Get data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateData(@RequestBody alertDto dto) {

        boolean check = alertService.updateAlert(dto);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Update data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Update data", "succeed", dto), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteData(@RequestParam String id) {

        boolean check = alertService.deleteAlert(id);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Delete data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Delete data", "succeed", null), HttpStatus.OK);
    }
}
