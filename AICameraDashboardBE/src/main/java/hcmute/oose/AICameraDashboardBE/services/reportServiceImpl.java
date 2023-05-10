package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class reportServiceImpl {

    private final alertServiceImpl alertService;

    public reportServiceImpl(alertServiceImpl alertService) {
        this.alertService = alertService;
    }

    public List<Integer> getAlertCount(int myYear){
        List<alertDto> dtos = alertService.getAllAlert();

        List<alertDto> filterList = dtos.stream()
                .filter(a -> a.getTime().getYear() == myYear)
                .collect(Collectors.toList());

        List<Integer> countAlert = new ArrayList<>();
        for (int i = 0; i<12; i++){
            countAlert.add(0);
        }

        filterList.forEach(x -> {
            int mon = x.getTime().getMonth().getValue();
            int temp = countAlert.get(mon-1);
            countAlert.set(mon-1, temp+1);
        });

        return countAlert;
    }
}
