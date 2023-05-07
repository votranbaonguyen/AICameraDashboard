package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.entities.cameraEntity;
import hcmute.oose.AICameraDashboardBE.exceptions.ExceptionCustom;
import hcmute.oose.AICameraDashboardBE.repositories.cameraRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class cameraServiceImpl implements cameraService {

    private final cameraRepository cameraRepository;

    public cameraServiceImpl(cameraRepository cameraRepo) {
        this.cameraRepository = cameraRepo;
    }

    @Override
    public void addOrUpdateCamera(cameraDto dto) {
        cameraEntity temp = new cameraEntity(null, dto.getCamName(), dto.getAreaId(), dto.getResource(),
                dto.getConnectionState(), dto.getSecurityLevel());

        cameraRepository.save(temp);
    }

    @Override
    public boolean removeCamera(String Id) {
        Optional<cameraEntity> temp = cameraRepository.findById(Id);
        if(temp.isEmpty()){
            return false;
        }
        cameraRepository.deleteById(Id);
        return true;
    }

    @Override
    public cameraDto getInfoCamera(String Id) {
        cameraDto myDto = new cameraDto();
        Optional<cameraEntity> camera = cameraRepository.findById(Id);
        if (camera.isPresent()) {
            cameraEntity cameraEntity = camera.get();
            myDto.setCamId(cameraEntity.getCamId());
            myDto.setCamName(cameraEntity.getCamName());
            myDto.setAreaId(cameraEntity.getAreaId());
            myDto.setResource(cameraEntity.getResource());
        } else
            return null;
        return myDto;
    }

    public List<cameraDto> getAllCamera(){
        List<cameraEntity> cameras = cameraRepository.findAll();
        List<cameraDto> cameraDtos = new ArrayList<cameraDto>();
        cameras.forEach(entity -> cameraDtos.add(new cameraDto(entity.getCamId(), entity.getCamName(),
                entity.getAreaId(), entity.getResource(), entity.getConnectionState(), entity.getSecurityLevel())));
        return cameraDtos;
    }
}
