package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.cameraEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface cameraRepository extends MongoRepository<cameraEntity, String> {

    boolean existsByCamId(String id);
    List<cameraEntity> findByArea_AreaId(String areaId);
    
}
