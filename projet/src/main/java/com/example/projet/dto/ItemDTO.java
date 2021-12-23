package com.example.projet.dto;

import lombok.Data;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class ItemDTO {

    @NotNull(message = "name must not be empty.")
    @NotEmpty(message = "name must not be null.")
    private String name;

    @NotNull(message = "price must not be empty.")
    private double price;

    @NotNull(message = "quantity must not be empty.")
    private int quantity;
}
