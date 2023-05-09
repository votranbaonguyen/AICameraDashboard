package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.entities.areaEntity;
import hcmute.oose.AICameraDashboardBE.entities.cameraEntity;
import hcmute.oose.AICameraDashboardBE.repositories.areaRepository;
import hcmute.oose.AICameraDashboardBE.repositories.cameraRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class areaServiceImpl implements areaService{

    private final areaRepository areaRepository;
    private final cameraRepository cameraRepository;

    public areaServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.areaRepository areaRepository, hcmute.oose.AICameraDashboardBE.repositories.cameraRepository cameraRepository) {
        this.areaRepository = areaRepository;
        this.cameraRepository = cameraRepository;
    }

    public void addArea(areaDto dto){

        areaEntity temp = new areaEntity(null, null, dto.getAreaName());

        areaRepository.save(temp);
    }

    public boolean updateArea(areaDto dto){
        if (!areaRepository.existsByAreaId(dto.getAreaId())){
            return false;
        }

        areaEntity temp = new areaEntity(dto.getAreaId(), dto.getCamera(), dto.getAreaName());

        areaRepository.save(temp);
        return true;
    }

    public boolean deleteArea(String areaId){
        if(areaRepository.existsByAreaId(areaId)){
            areaRepository.deleteById(areaId);

            List<cameraEntity> entities = cameraRepository.findByArea_AreaId(areaId);
            if (!entities.isEmpty()){
                entities.forEach(x -> {
                    x.setArea(null);
                    x.setConnectionState(false);
                    cameraRepository.save(x);
                });
            }
            
            return true;
        } else {
            return false;
        }

    }

    public areaDto getOneArea(String areaId){
        if (!areaRepository.existsByAreaId(areaId)){
            return null;
        }
        Optional<areaEntity> temp = areaRepository.findById(areaId);
        areaEntity x = temp.get();
        areaDto dto = new areaDto(x.getAreaId(), x.getCamera(), x.getAreaName());
        return dto;
    }

    public List<areaDto> getAllArea(){
        List<areaDto> dtos = new ArrayList<>();
        List<areaEntity> entities = areaRepository.findAll();
        entities.forEach(x -> dtos.add(new areaDto(x.getAreaId(), x.getCamera(), x.getAreaName())));
        return dtos;
    }
}
