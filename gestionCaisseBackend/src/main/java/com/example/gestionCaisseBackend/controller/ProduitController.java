package com.example.gestionCaisseBackend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.gestionCaisseBackend.exception.ResourceNotFoundExeption;
import com.example.gestionCaisseBackend.model.Produit;
import com.example.gestionCaisseBackend.repository.ProduitRepository;

@RestController
	@RequestMapping("/api")
public class ProduitController {

		@Autowired
		private ProduitRepository produitRepository;
		

		// Retourner tout les produits
		@GetMapping("/Produit")
		public List<Produit> getAllProduits() {
			return produitRepository.findAll();
		}
		
		// Créer un Produit
		@PostMapping("/Produit")
		public Produit createProduit(@RequestBody Produit produit) {
			return produitRepository.save(produit);
		}

		// Retourner un produit avec son ID
		@GetMapping("/Produit/{id}")
		public ResponseEntity<Produit> getProduitById(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
			Produit produit = produitRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExeption("Produit avec id = "+id+" non retrouvé dans la base de données !!"));
			return ResponseEntity.ok().body(produit);
		}
		
		// Supprimer un produit
		@DeleteMapping("/Produit/{id}")
		public ResponseEntity<?> deleteProduitBy(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
			Produit produit  = produitRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExeption("Produit avec id = "+id+" non retrouvé dans la base de données !!"));
			produitRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
	}
