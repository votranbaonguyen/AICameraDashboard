package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.cameraEntity;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface cameraRepository extends MongoRepository<cameraEntity, String> {
    
}
