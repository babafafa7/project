package com.example.projet.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message = "forename must not be empty.")
    @NotEmpty(message = "forename must not be null.")
    private String forename;

    @NotNull(message = "surname must not be empty.")
    @NotEmpty(message = "surname must not be null.")
    private String surname;

    @Email
    @Column(unique = true)
    @NotNull(message = "mail must not be empty.")
    @NotEmpty(message = "mail must not be null.")
    private String mail;

}
