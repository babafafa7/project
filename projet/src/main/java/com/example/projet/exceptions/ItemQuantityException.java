package com.example.projet.exceptions;

public class ItemQuantityException extends RuntimeException{
    public ItemQuantityException(){
        super("Out of stock.");
    }
}
