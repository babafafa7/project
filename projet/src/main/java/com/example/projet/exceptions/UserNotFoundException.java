package com.example.projet.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String mail){
        super(String.format("User %s not existing.", mail));
    }
}
