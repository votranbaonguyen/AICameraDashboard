package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.alertSettingDto;
import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.dtos.employeeDto;
import hcmute.oose.AICameraDashboardBE.entities.alertSettingEntity;
import hcmute.oose.AICameraDashboardBE.repositories.alertSettingRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class alertSettingServiceImpl implements alertSettingService{

    private final alertSettingRepository alertSettingRepository;
    private final areaServiceImpl areaService;
    private final employeeServiceImpl employeeService;

    public alertSettingServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.alertSettingRepository alertSettingRepository, areaServiceImpl areaService, employeeServiceImpl employeeService) {
        this.alertSettingRepository = alertSettingRepository;
        this.areaService = areaService;
        this.employeeService = employeeService;
    }

    public void addAlertST(alertSettingDto dto){
        areaDto tmp = areaService.getOneArea(dto.getArea().getAreaId());
        employeeDto emp = employeeService.getOneEmployee(dto.getEmployee().getEmployeeId());

        alertSettingEntity temp = new alertSettingEntity(null, dto.getAlertName(), dto.getStartTime(),
                dto.getEndTime(), dto.getSecLevel(), emp, tmp);

        alertSettingRepository.insert(temp);
    }

    public boolean updateAlertST(alertSettingDto dto){
        if (!alertSettingRepository.existsByAlertSTId(dto.getAlertSTId())){
            return false;
        }

        alertSettingEntity temp = new alertSettingEntity(dto.getAlertSTId(), dto.getAlertName(), dto.getStartTime(),
                dto.getEndTime(), dto.getSecLevel(), dto.getEmployee(), dto.getArea());

        alertSettingRepository.save(temp);
        return true;
    }

    public boolean deleteAlertST(String id){
        if (!alertSettingRepository.existsByAlertSTId(id)){
            return false;
        }

        alertSettingRepository.deleteById(id);
        return true;
    }

    public alertSettingDto getOneAlertST(String id){
        if (!alertSettingRepository.existsByAlertSTId(id)){
            return null;
        }

        Optional<alertSettingEntity> temp = alertSettingRepository.findById(id);
        alertSettingEntity x = temp.get();
        alertSettingDto dto = new alertSettingDto(x.getAlertSTId(), x.getAlertName(), x.getStartTime(), x.getEndTime(),
                x.getSecLevel(), x.getEmployee(), x.getArea());

        return dto;
    }

    public List<alertSettingDto> getAllAlertST(){
        List<alertSettingEntity> entities = alertSettingRepository.findAll();
        List<alertSettingDto> dtos = new ArrayList<>();

        entities.forEach(x -> dtos.add(new alertSettingDto(x.getAlertSTId(), x.getAlertName(), x.getStartTime(),
                x.getEndTime(), x.getSecLevel(), x.getEmployee(), x.getArea())));

        return dtos;
    }
}
