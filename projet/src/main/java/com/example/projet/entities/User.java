package com.example.projet.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String forename;

    private String surname;

    @Column(unique = true)
    private String mail;

    @JsonIgnoreProperties("user")
    @OneToOne(cascade = {CascadeType.ALL})
    private Cart cart;
}
