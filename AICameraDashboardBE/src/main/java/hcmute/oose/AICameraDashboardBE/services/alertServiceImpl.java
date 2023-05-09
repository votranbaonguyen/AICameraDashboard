package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.alertDto;
import hcmute.oose.AICameraDashboardBE.entities.alertEntity;
import hcmute.oose.AICameraDashboardBE.repositories.alertRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class alertServiceImpl implements  alertService{

    private final alertRepository alertRepository;

    public alertServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.alertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public void addAlert(alertDto dto){
        alertEntity temp = new alertEntity(null, dto.getContent(), dto.getAreaId(),
                dto.getSecurityLevel(), dto.getTime(), dto.getPlayBack(), dto.getFromSettingId());
        alertRepository.save(temp);
    }

    public boolean updateAlert(alertDto dto){
        if (!alertRepository.existsByAreaId(dto.getAlertId())){
            return false;
        }
        alertEntity temp = new alertEntity(dto.getAlertId(), dto.getContent(), dto.getAreaId(),
                dto.getSecurityLevel(), dto.getTime(), dto.getPlayBack(), dto.getFromSettingId());
        alertRepository.save(temp);
        return true;
    }

    public boolean deleteAlert(String id){
        if (!alertRepository.existsByAreaId(id)){
            return false;
        }
        alertRepository.deleteById(id);
        return true;
    }

    public alertDto getOneAlert(String id){
        if (!alertRepository.existsByAreaId(id)){
            return null;
        }
        Optional<alertEntity> temp = alertRepository.findById(id);
        alertEntity x = temp.get();
        alertDto dto = new alertDto(x.getAlertId(), x.getContent(), x.getAreaId(), x.getSecurityLevel(),
                x.getTime(), x.getPlayBack(), x.getFromSettingId());
        return dto;
    }

    public List<alertDto> getAllAlert(){
        List<alertDto> dtos = new ArrayList<>();
        List<alertEntity> entities = alertRepository.findAll();

        entities.forEach(x -> dtos.add(new alertDto(x.getAlertId(), x.getContent(), x.getAreaId(), x.getSecurityLevel(),
                x.getTime(), x.getPlayBack(), x.getFromSettingId())));
        return dtos;
    }
}
