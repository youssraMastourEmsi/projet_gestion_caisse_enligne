package com.example.gestionCaisseBackend.model;
import java.time.LocalDateTime;
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
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name="commande")
public class Commande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column(name="total",nullable=true)
	private float total;
	
	@CreatedDate
	@Column(name="date", nullable = false, updatable = false)
	private LocalDateTime date;

	@ManyToOne(targetEntity= User.class, cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="id_user", referencedColumnName="id")
    private Set<User> User = new HashSet<>();

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Commande() {
		super();
	}

	public Commande(Integer id, float total, Set<User> users) {
		super();
		this.id = id;
		this.total = total;
		User = users;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public Set<User> getUsers() {
		return User;
	}

	public void setUsers(Set<User> users) {
		User = users;
	}
	
}
