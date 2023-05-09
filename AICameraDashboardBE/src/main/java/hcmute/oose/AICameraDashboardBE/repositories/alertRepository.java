package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.alertEntity;
import hcmute.oose.AICameraDashboardBE.entities.areaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface alertRepository extends MongoRepository<alertEntity, String> {
    boolean existsByAlertId(String id);
}
