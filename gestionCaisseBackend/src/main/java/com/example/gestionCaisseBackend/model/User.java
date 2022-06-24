package com.example.gestionCaisseBackend.model;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name="nom",length=200,nullable=true)
	private String Nom;
	
	@Column(name="Prenom",length=200,nullable=true)
	private String Prenom;
	
	@Column(name="email",nullable=true)
	private String  Email;
	
	@Column(name="password",length=200,nullable=true,unique=true)
	private String  Password;
	
	@Column(name="role")
	private String Role;

	public User() {
		super();
	}

	public User(Integer id, String nom, String prenom, String email, String password, String role) {
		super();
		this.id = id;
		Nom = nom;
		Prenom = prenom;
		Email = email;
		Password = password;
		Role = role;
	}

	public String getNom() {
		return Nom;
	}

	public void setNom(String nom) {
		Nom = nom;
	}

	public String getPrenom() {
		return Prenom;
	}

	public void setPrenom(String prenom) {
		Prenom = prenom;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
}
