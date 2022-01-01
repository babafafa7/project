package com.example.projet.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class UserDTO {
    @NotNull(message = "forename must not be empty.")
    @NotEmpty(message = "forename must not be null.")
    private String forename;

    @NotNull(message = "surname must not be empty.")
    @NotEmpty(message = "surname must not be null.")
    private String surname;

    @Email
    @NotNull(message = "mail must not be empty.")
    @NotEmpty(message = "mail must not be null.")
    private String mail;
}
