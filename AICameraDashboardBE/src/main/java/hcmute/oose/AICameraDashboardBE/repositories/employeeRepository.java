package hcmute.oose.AICameraDashboardBE.repositories;

import hcmute.oose.AICameraDashboardBE.entities.employeeEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface employeeRepository extends MongoRepository<employeeEntity, String> {
    boolean existsByEmployeeId(String id);
    List<employeeEntity> findByNameContainingIgnoreCase(String name);
}
