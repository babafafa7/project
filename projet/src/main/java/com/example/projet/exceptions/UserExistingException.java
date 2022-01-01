package com.example.projet.exceptions;

public class UserExistingException extends RuntimeException{
    public UserExistingException(String mail){
        super(String.format("%s have already a account", mail));
    }
}
