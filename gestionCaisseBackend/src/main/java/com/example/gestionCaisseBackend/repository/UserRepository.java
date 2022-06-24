package com.example.gestionCaisseBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gestionCaisseBackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User , Long> {

}
