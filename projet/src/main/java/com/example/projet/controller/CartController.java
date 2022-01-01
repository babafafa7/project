package com.example.projet.controller;

import com.example.projet.entities.Cart;
import com.example.projet.entities.Item;
import com.example.projet.services.CartService;
import com.example.projet.services.ItemService;
import com.example.projet.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="user/{id}/cart")
@CrossOrigin("*")

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
    public ResponseEntity<List<Item>> getCartByUserId(@PathVariable("id") Long id){
        return new ResponseEntity<>(cartService.getCartByUser(userService.getUserById(id)).getItems(), HttpStatus.OK);
    }

    @GetMapping(path = "/price")
    public ResponseEntity<Integer> getPriceCart(@PathVariable("id") Long id){
        return new ResponseEntity<>(cartService.getPriceCart(userService.getUserById(id)),HttpStatus.OK);
    }

    @GetMapping(path = "/add/{itemId}")
    public ResponseEntity<Item> addNewItem(@PathVariable("id") Long id,
                                           @PathVariable("itemId") Long itemId){
        return new ResponseEntity<>(cartService.addNewItem(userService.getUserById(id), itemService.getItemById(itemId)),HttpStatus.OK);
    }

    @GetMapping(path = "remove/{itemId}")
    public ResponseEntity<Cart> removeItem(@PathVariable("id") Long id,
                                           @PathVariable("itemId") Long itemId){
        return new ResponseEntity<>(cartService.removeItem(userService.getUserById(id),itemService.getItemById(itemId)),HttpStatus.OK);
    }

    @GetMapping(path = "/purchase")
    public ResponseEntity<Cart> purchaseCart(@PathVariable("id") Long id){
        return new ResponseEntity<>(cartService.purchaseCart(userService.getUserById(id)),HttpStatus.OK);
    }
}
