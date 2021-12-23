package com.example.projet.exceptions;

public class ItemNotFoundException extends RuntimeException{
    public ItemNotFoundException(Long id){
        super(String.format("Item %s not existing. ", id));
    }
}
