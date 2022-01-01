package com.example.projet.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private int price;

    private int quantity = 0;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Cart> carts;
}
