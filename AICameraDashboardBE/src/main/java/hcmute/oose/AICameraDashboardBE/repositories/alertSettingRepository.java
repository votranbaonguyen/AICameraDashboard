package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.alertSettingEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface alertSettingRepository extends MongoRepository<alertSettingEntity, String> {
    boolean existsByAlertSTId(String id);
}
