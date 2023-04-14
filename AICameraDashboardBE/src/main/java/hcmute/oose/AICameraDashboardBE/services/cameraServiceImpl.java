package hcmute.oose.AICameraDashboardBE.services;

import hcmute.oose.AICameraDashboardBE.dtos.camera.cameraDto;
import hcmute.oose.AICameraDashboardBE.entities.cameraEntity;
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
        cameraRepository
                .insert(new cameraEntity(dto.getCamId(), dto.getCamName(), dto.getAreaId(), dto.getResource()));
    }

    @Override
    public void removeCamera(String Id) {
    }

    @Override
    public cameraDto getInfoCamera(String Id) {
        cameraDto myDto = new cameraDto();
        Optional<cameraEntity> camera = cameraRepository.findById(Id);
        if (camera.isPresent()) {
            cameraEntity cameraEntity = camera.get();

            myDto.setCamName(cameraEntity.getCamName());
            myDto.setAreaId(cameraEntity.getAreaId());
            myDto.setResource(cameraEntity.getResource());
        } else {

        }
        return myDto;
    }

    public List<cameraEntity> getAllCamera(){
        List<cameraEntity> myCam = new ArrayList<>();
        List<cameraEntity> cameras = cameraRepository.findAll();
        return cameras;
    }
}
