package com.example.projet.dao;

import com.example.projet.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    @Query(value = "SELECT * FROM item WHERE name LIKE %:search%", nativeQuery = true)
    List<Item> findItemsByNameLike(@Param("search") String search);
}
