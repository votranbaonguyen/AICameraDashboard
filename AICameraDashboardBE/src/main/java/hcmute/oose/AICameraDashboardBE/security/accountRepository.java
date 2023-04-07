package hcmute.oose.AICameraDashboardBE.security;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface accountRepository extends MongoRepository<AccountEntity, String> {
	Optional<AccountEntity> findByEmail(String email);
}
