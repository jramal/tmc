package br.com.unifieo.tmc.repository;

import br.com.unifieo.tmc.domain.Condominio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Spring Data JPA repository for the Condominio entity.
 */
public interface CondominioRepository extends JpaRepository<Condominio, Long> {

    Optional<Condominio> findOneByRazaoSocial(String razaoSocial);
}
