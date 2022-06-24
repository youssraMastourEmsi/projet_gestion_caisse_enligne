package com.example.gestionCaisseBackend.model;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ligne_commande")
public class Ligne_commande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

	@Column(name="total",nullable=true)
	private float total;

	@Column(name="qte",nullable=true)
	private int qte;

	@ManyToOne(targetEntity= Commande.class, cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="id_commande", referencedColumnName="id")
    private Set<Commande> commande = new HashSet<>();

	@ManyToOne(targetEntity= Produit.class, cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="id_produit", referencedColumnName="id")
    private Set<Produit> produit = new HashSet<>();

}
