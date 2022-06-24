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
import com.example.gestionCaisseBackend.model.User;
import com.example.gestionCaisseBackend.repository.UserRepository;

	@RestController
	@RequestMapping("/api")
public class UserController {

		@Autowired
		private UserRepository userRepository;
		

		// Retourner tout les users
		@GetMapping("/User")
		public List<User> getAllUsers() {
			return userRepository.findAll();
		}
		
		// Créer un user
		@PostMapping("/User")
		public User createUser(@RequestBody User user) {
			return userRepository.save(user);
		}

		// Retourner un user avec son ID
		@GetMapping("/User/{id}")
		public ResponseEntity<User> getUserById(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
			User user = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExeption("User avec id = "+id+" non retrouvé dans la base de données !!"));
			return ResponseEntity.ok().body(user);
		}
		
		// Supprimer un User
		@DeleteMapping("/User/{id}")
		public ResponseEntity<?> deleteUserBy(@PathVariable(value = "id") long id) throws ResourceNotFoundExeption {
			User user  = userRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundExeption("user avec id = "+id+" non retrouvé dans la base de données !!"));
			userRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
	}


