package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.dtos.employeeDto;
import hcmute.oose.AICameraDashboardBE.entities.employeeEntity;
import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;
import hcmute.oose.AICameraDashboardBE.services.employeeServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/employee")
public class employeeController {

    private final employeeServiceImpl employeeService;

    public employeeController(employeeServiceImpl employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping()
    public ResponseEntity<?> addData(@Valid @RequestBody employeeDto dto) {

        employeeEntity temp = employeeService.addEmployee(dto);
        if (temp == null){
            return new ResponseEntity<>
                    (new ResponseDto("Error", "Add failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Add succeed", "Add succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/name")
    public ResponseEntity<?> getDataByName(@RequestParam String name) {

        List<employeeDto> dto = employeeService.getEmployeeByName(name);
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllData() {

        List<employeeDto> dto = employeeService.getAllEmployee();
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<?> getDataById(@RequestParam String id) {

        employeeDto dto = employeeService.getOneEmployee(id);
        if (dto == null){
            return new ResponseEntity<>
                    (new ResponseDto("Get data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", dto), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateData(@RequestBody employeeDto dto) {

        employeeEntity temp = employeeService.updateEmployee(dto);
        if (temp == null) {
            return new ResponseEntity<>
                    (new ResponseDto("Update data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Update data", "succeed", dto), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteData(@RequestParam String id) {

        boolean check = employeeService.deleteEmployee(id);
        if (check == false) {
            return new ResponseEntity<>
                    (new ResponseDto("Delete data", "failed", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>
                (new ResponseDto("Delete data", "succeed", null), HttpStatus.OK);
    }
}
