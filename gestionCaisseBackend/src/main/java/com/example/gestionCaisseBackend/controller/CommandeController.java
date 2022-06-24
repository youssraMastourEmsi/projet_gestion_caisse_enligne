package com.example.gestionCaisseBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gestionCaisseBackend.exception.ResourceNotFoundExeption;
import com.example.gestionCaisseBackend.model.Commande;
import com.example.gestionCaisseBackend.repository.CommandeRepository;


@RestController
@RequestMapping("/api")
public class CommandeController {

	@Autowired
	private CommandeRepository commandeRepository;
	

	// Retourner tout les commandes
	@GetMapping("/commande")
	public List<Commande> getAllCommandes() {
		return commandeRepository.findAll();
	}
	
	// Créer une commande
	@PostMapping("/commande")
	public Commande createCommand(@RequestBody Commande commande) {
		return commandeRepository.save(commande);
	}

	// Retourner une commande avec son ID
	@GetMapping("/commande/{id}")
	public ResponseEntity<Commande> getCommandeById(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
		Commande commande = commandeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExeption("Commande avec id = "+id+" non retrouvé dans la base de données !!"));
		return ResponseEntity.ok().body(commande);
	}
	
	// Supprimer une commande
	@DeleteMapping("/commande/{id}")
	public ResponseEntity<?> deleteCommandeBy(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
		Commande commande = commandeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExeption("Commande avec id = "+id+" non retrouvé dans la base de données !!"));
		commandeRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
