package com.example.projet.dao;

import com.example.projet.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM user WHERE mail LIKE %:search%", nativeQuery = true)
    List<User> findUsersByMailLike(@Param("search") String search);
}