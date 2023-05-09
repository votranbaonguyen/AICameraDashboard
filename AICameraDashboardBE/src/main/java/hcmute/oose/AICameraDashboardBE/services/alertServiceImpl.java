package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import hcmute.oose.AICameraDashboardBE.dtos.alertSettingDto;
import hcmute.oose.AICameraDashboardBE.entities.alertEntity;
import hcmute.oose.AICameraDashboardBE.repositories.alertRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class alertServiceImpl implements  alertService{

    private final alertRepository alertRepository;
    private final alertSettingServiceImpl alertSettingService;

    public alertServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.alertRepository alertRepository, alertSettingServiceImpl alertSettingService) {
        this.alertRepository = alertRepository;
        this.alertSettingService = alertSettingService;
    }

    public void addAlert(alertDto dto){
        alertSettingDto mySetting = alertSettingService.getOneAlertST(dto.getAlertSetting().getAlertSTId());

        alertEntity temp = new alertEntity(null, mySetting.getAlertName(), mySetting.getArea().getAreaId(),
                mySetting.getSecLevel(), LocalDate.now(), dto.getPlayBack(), mySetting);
        alertRepository.save(temp);
    }

//    Tạm thời ko xài
    public boolean updateAlert(alertDto dto){
        if (!alertRepository.existsByAlertId(dto.getAlertId())){
            return false;
        }
        alertEntity temp = new alertEntity(dto.getAlertId(), dto.getContent(), dto.getAreaId(),
                dto.getSecurityLevel(), dto.getTime(), dto.getPlayBack(), dto.getAlertSetting());
        alertRepository.save(temp);
        return true;
    }

    public boolean deleteAlert(String id){
        if (!alertRepository.existsByAlertId(id)){
            return false;
        }
        alertRepository.deleteById(id);
        return true;
    }

    public alertDto getOneAlert(String id){
        if (!alertRepository.existsByAlertId(id)){
            return null;
        }
        Optional<alertEntity> temp = alertRepository.findById(id);
        alertEntity x = temp.get();
        alertDto dto = new alertDto(x.getAlertId(), x.getContent(), x.getAreaId(), x.getSecurityLevel(),
                x.getTime(), x.getPlayBack(), x.getAlertSetting());
        return dto;
    }

    public List<alertDto> getAllAlert(){
        List<alertDto> dtos = new ArrayList<>();
        List<alertEntity> entities = alertRepository.findAll();

        entities.forEach(x -> dtos.add(new alertDto(x.getAlertId(), x.getContent(), x.getAreaId(), x.getSecurityLevel(),
                x.getTime(), x.getPlayBack(), x.getAlertSetting())));
        return dtos;
    }
}
