package hcmute.oose.AICameraDashboardBE.controllers;

import hcmute.oose.AICameraDashboardBE.dtos.ResponseDto;
import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import hcmute.oose.AICameraDashboardBE.services.reportServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/report")
public class reportController {

    private final reportServiceImpl reportService;

    public reportController(reportServiceImpl reportService) {
        this.reportService = reportService;
    }

    @GetMapping()
    public ResponseEntity<?> getAllData(@RequestParam int year) {

        List<Integer> myResult = reportService.getAlertCount(year);
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", myResult), HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<?> getAllData2(@RequestParam int month, @RequestParam int year) {

        List<Integer> myResult = reportService.getAlertCountOfMonth(month, year);
        return new ResponseEntity<>
                (new ResponseDto("Get data", "succeed", myResult), HttpStatus.OK);
    }
}
