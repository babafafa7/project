package com.example.projet.controller;

import com.example.projet.entities.Cart;
import com.example.projet.services.CartService;
import com.example.projet.services.ItemService;
import com.example.projet.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="user/{id}/cart")
public class CartController {

    CartService cartService;
    UserService userService;
    ItemService itemService;

    public CartController(CartService cartService,
                          UserService userService, ItemService itemService){
        this.cartService = cartService;
        this.userService = userService;
        this.itemService = itemService;
    }

    @GetMapping
    public ResponseEntity<Cart> getCartByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(cartService.getCartByUser(userService.getUserById(id)), HttpStatus.OK);
    }

    @PostMapping(path = "/add/{itemId}")
    public ResponseEntity<Cart> addNewItem(@PathVariable("id") Long id,
                                           @PathVariable("itemId") Long itemId){
        return new ResponseEntity<>(cartService.addNewItem(userService.getUserById(id), itemService.getItemById(itemId)),HttpStatus.OK);
    }

    @PostMapping(path = "remove/{itemId}")
    public ResponseEntity<Cart> removeItem(@PathVariable("id") Long id,
                                           @PathVariable("itemId") Long itemId){
        return new ResponseEntity<>(cartService.removeItem(userService.getUserById(id),itemService.getItemById(itemId)),HttpStatus.OK);
    }

    @PostMapping(path = "/purchase")
    public ResponseEntity<String> purchaseCart(@PathVariable("id") Long id){
        return new ResponseEntity<>(cartService.purchaseCart(userService.getUserById(id)),HttpStatus.OK);
    }
}
