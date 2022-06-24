package com.example.gestionCaisseBackend.repository;
	import com.example.gestionCaisseBackend.model.Commande;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
@Repository
public interface CommandeRepository extends JpaRepository<Commande , Long>{

	
	
}
