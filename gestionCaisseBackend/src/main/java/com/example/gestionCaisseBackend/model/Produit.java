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
@Table(name="produits")
public class Produit {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column(name="nom",length=200,nullable=true)
	private String nom;
	
	@Column(name="description",length=3000,nullable=true)
	private String description;
	
	@Column(name="prix",nullable=true)
	private float prix;
	
	@Column(name="qte",nullable=true)
	private int qte;
	
	@Column(name="image",length=3000,nullable=true)
	private String image;

	public Produit() {
		super();
	}

	public Produit(Integer id, String nom, String description, float prix, int qte, String image) {
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.qte = qte;
		this.image = image;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public int getQte() {
		return qte;
	}

	public void setQte(int qte) {
		this.qte = qte;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
