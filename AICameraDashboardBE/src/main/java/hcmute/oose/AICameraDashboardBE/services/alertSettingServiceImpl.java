package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.alertSettingDto;
import hcmute.oose.AICameraDashboardBE.entities.alertSettingEntity;
import hcmute.oose.AICameraDashboardBE.repositories.alertSettingRepository;
import org.springframework.stereotype.Service;

@Service
public class alertSettingServiceImpl implements alertSettingService{

    private final alertSettingRepository alertSettingRepository;

    public alertSettingServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.alertSettingRepository alertSettingRepository) {
        this.alertSettingRepository = alertSettingRepository;
    }

    public void addAlertST(alertSettingDto dto){
        alertSettingEntity temp = new alertSettingEntity(null, dto.getAlertName(), dto.getStartTime(),
                dto.getEndTime(), dto.getSecLevel(), dto.getImgLink(), dto.getAreaId());

        alertSettingRepository.insert(temp);
    }

    public boolean updateAlertST(alertSettingDto dto){
        if (!alertSettingRepository.existsByAlertSTId(dto.getAlertSTId())){
            return false;
        }

        alertSettingEntity temp = new alertSettingEntity(dto.getAlertSTId(), dto.getAlertName(), dto.getStartTime(),
                dto.getEndTime(), dto.getSecLevel(), dto.getImgLink(), dto.getAreaId());

        alertSettingRepository.save(temp);
        return true;
    }

//    public boolean deleleAlertST(String id){
//
//    }
}
