package com.example.projet.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String forename;

    private String surname;

    @Column(unique = true)
    private String mail;

    @JsonIgnoreProperties("user")
    @OneToOne(cascade = {CascadeType.ALL})
    private Cart cart;
}
