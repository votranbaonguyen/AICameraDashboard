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
    public void addCamera(cameraDto dto) {
        cameraEntity temp = new cameraEntity(null, dto.getCamName(), dto.getAreaId(), dto.getResource(),
                dto.getConnectionState(), dto.getSecurityLevel());

        cameraRepository.save(temp);
    }

    public boolean updateCamera(cameraDto dto){
        if (!cameraRepository.existsByCamId(dto.getCamId())){
            return false;
        }
        cameraEntity temp = new cameraEntity(dto.getCamId(), dto.getCamName(), dto.getAreaId(),
                dto.getResource(), dto.getConnectionState(), dto.getSecurityLevel());
        cameraRepository.save(temp);
        return true;
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
        if (!cameraRepository.existsByCamId(Id)){
            return null;
        }
        Optional<cameraEntity> temp = cameraRepository.findById(Id);
        cameraEntity x = temp.get();
        cameraDto dto = new cameraDto(x.getCamId(), x.getCamName(), x.getAreaId(), x.getResource(),
                x.getConnectionState(), x.getSecurityLevel());
        return dto;
    }

    public List<cameraDto> getAllCamera(){
        List<cameraEntity> cameras = cameraRepository.findAll();
        List<cameraDto> cameraDtos = new ArrayList<>();
        cameras.forEach(entity -> cameraDtos.add(new cameraDto(entity.getCamId(), entity.getCamName(),
                entity.getAreaId(), entity.getResource(), entity.getConnectionState(), entity.getSecurityLevel())));
        return cameraDtos;
    }
}
