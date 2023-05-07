package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.areaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface areaRepository extends MongoRepository<areaEntity, String> {

    boolean existsByAreaId(String id);

}
