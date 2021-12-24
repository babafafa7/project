package com.example.projet.controller;

import com.example.projet.dto.UserDTO;
import com.example.projet.dto.UserUpdateDTO;
import com.example.projet.entities.User;
import com.example.projet.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(path="/user")
@CrossOrigin(origins = "http://localhost")
public class UserController {
   private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path="/add")
    public ResponseEntity<User> addNewUser (@RequestBody @Valid UserDTO userDTO) {
       return new ResponseEntity<>(userService.addUser(userDTO), HttpStatus.CREATED);
    }

    @GetMapping(path="/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<User> getUserbyId(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
    }

    @PutMapping(path = "/{id}/update")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
                                           @RequestBody @Valid UserUpdateDTO userUpdateDTO){
       return new ResponseEntity<>(userService.updateUser(id,userUpdateDTO),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<User>> deleteUserById(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.deleteUser(id),HttpStatus.OK);
    }

    @GetMapping(path = "/search")
    public ResponseEntity<List<User>> getUsersBySearch(@PathParam("search") String search){
        return new ResponseEntity<>(userService.getUsersBySearch(search),HttpStatus.OK);
    }
}
