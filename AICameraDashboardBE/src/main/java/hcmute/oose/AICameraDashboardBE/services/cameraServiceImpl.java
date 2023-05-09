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
public class cameraServiceImpl implements cameraService {

    private final cameraRepository cameraRepository;
    private final areaServiceImpl areaService;

    public cameraServiceImpl(cameraRepository cameraRepo, hcmute.oose.AICameraDashboardBE.repositories.areaRepository areaRepository, areaServiceImpl areaService) {
        this.cameraRepository = cameraRepo;
        this.areaService = areaService;
    }

    @Override
    public void addCamera(cameraDto dto) {

        areaDto areaDto = areaService.getOneArea(dto.getArea().getAreaId());

        cameraEntity temp = new cameraEntity(null, dto.getCamName(), areaDto, dto.getResource(),
                dto.getConnectionState(), dto.getSecurityLevel());

        cameraRepository.insert(temp);

        cameraDto newDto = new cameraDto(temp.getCamId(), temp.getCamName(), null, null,
                null, null);
        areaDto.setCamera(newDto);
        areaService.updateArea(areaDto);
    }

    public boolean updateCamera(cameraDto dto){
        if (!cameraRepository.existsByCamId(dto.getCamId())){
            return false;
        }

        areaDto x = areaService.getOneArea(dto.getArea().getAreaId());
        cameraDto y = getInfoCamera(dto.getCamId());
        if (!y.getArea().getAreaId().equals(x.getAreaId())){
            x.setCamera(null);
            areaService.updateArea(x);
        }

        cameraEntity temp = new cameraEntity(dto.getCamId(), dto.getCamName(), x,
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
        cameraDto cameraDto = getInfoCamera(Id);
        areaDto areaDto = areaService.getOneArea(cameraDto.getArea().getAreaId());
        areaDto.setCamera(null);
        areaService.updateArea(areaDto);

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
        cameraDto dto = new cameraDto(x.getCamId(), x.getCamName(), x.getArea(), x.getResource(),
                x.getConnectionState(), x.getSecurityLevel());
        return dto;
    }

    public List<cameraDto> getAllCamera(){
        List<cameraEntity> cameras = cameraRepository.findAll();
        List<cameraDto> cameraDtos = new ArrayList<>();
        cameras.forEach(entity -> cameraDtos.add(new cameraDto(entity.getCamId(), entity.getCamName(),
                entity.getArea(), entity.getResource(), entity.getConnectionState(), entity.getSecurityLevel())));
        return cameraDtos;
    }
}
