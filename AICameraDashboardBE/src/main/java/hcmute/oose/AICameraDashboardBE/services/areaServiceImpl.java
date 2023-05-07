package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.areaDto;
import hcmute.oose.AICameraDashboardBE.entities.areaEntity;
import hcmute.oose.AICameraDashboardBE.repositories.areaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class areaServiceImpl implements areaService{

    private final areaRepository areaRepository;

    public areaServiceImpl(hcmute.oose.AICameraDashboardBE.repositories.areaRepository areaRepository) {
        this.areaRepository = areaRepository;
    }

    public void addArea(areaDto dto){

        areaEntity temp = new areaEntity(null, dto.getCamId(), dto.getAreaName());

        areaRepository.save(temp);
    }

    public boolean updateArea(areaDto dto){
        if (!areaRepository.existsByAreaId(dto.getAreaId())){
            return false;
        } else {
            areaEntity temp = new areaEntity(dto.getAreaId(), dto.getCamId(), dto.getAreaName());

            areaRepository.save(temp);
            return true;
        }
    }

    public boolean deleteArea(String areaId){
        if(areaRepository.existsByAreaId(areaId)){
            areaRepository.deleteById(areaId);
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
        areaDto dto = new areaDto(x.getAreaId(), x.getCamId(), x.getAreaName());
        return dto;
    }

    public List<areaDto> getAllArea(){
        List<areaDto> dtos = new ArrayList<>();
        List<areaEntity> entities = areaRepository.findAll();
        entities.forEach(x -> dtos.add(new areaDto(x.getAreaId(), x.getCamId(), x.getAreaId())));
        return dtos;
    }
}
