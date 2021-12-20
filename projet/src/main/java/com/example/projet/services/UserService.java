package com.example.projet.services;

import com.example.projet.dao.UserRepository;
import com.example.projet.dto.UserDTO;
import com.example.projet.dto.UserUpdateDTO;
import com.example.projet.entities.User;
import com.example.projet.exceptions.UserExistingException;
import com.example.projet.exceptions.UserNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;


@Service
public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(""));
    }

    public User addUser(UserDTO userDTO){
        mailAlreadyExisting(userDTO.getMail());
        User newUser = new User();
        newUser.setForename(userDTO.getForename());
        newUser.setSurname(userDTO.getSurname());
        newUser.setMail(userDTO.getMail());
        return userRepository.save(newUser);
    }

    public User updateUser(Long id, UserUpdateDTO userUpdateDTO){
        User updateUser = getUserById(id);
        updateUser.setSurname(userUpdateDTO.getSurname());
        updateUser.setForename(userUpdateDTO.getForename());
        return userRepository.save(updateUser);
    }

    public String deleteUser(Long id){
        getUserById(id);
        userRepository.deleteById(id);
        return String.format("User %d successfully deleted.",id);
    }

    private void mailAlreadyExisting(String mail){
        getAllUsers().forEach( user ->
        {
            if (Objects.equals(user.getMail(), mail)) {
                throw  new UserExistingException(mail);
            }
        });
    }
}
