package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.services.areaServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/area")
public class areaController {

    private final areaServiceImpl areaService;

    public areaController(areaServiceImpl areaService) {
        this.areaService = areaService;
    }

    @PostMapping()
    public ResponseEntity<?> addData(@Valid @RequestBody areaDto dto) {

        areaService.addArea(dto);

        return new ResponseEntity<>
                (new ResponseDto("Add Data", "Succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllData() {

        List<areaDto> dtos = areaService.getAllArea();
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dtos), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<?> getDataById(@RequestParam String id) {

        areaDto dto = areaService.getOneArea(id);
        if (dto == null){
            return new ResponseEntity<>
                    (new ResponseDto("Get data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateData(@RequestBody areaDto dto) {

        boolean check = areaService.updateArea(dto);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Update data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Update data", "succeed", dto), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteData(@RequestParam String id) {

        boolean check = areaService.deleteArea(id);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Delete data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Delete data", "succeed", null), HttpStatus.OK);
    }
}
