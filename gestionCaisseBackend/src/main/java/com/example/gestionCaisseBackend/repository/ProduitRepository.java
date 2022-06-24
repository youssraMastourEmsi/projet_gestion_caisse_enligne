package com.example.gestionCaisseBackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;	
import com.example.gestionCaisseBackend.model.Produit;
	@Repository
public interface ProduitRepository extends JpaRepository<Produit , Long>{


	}

