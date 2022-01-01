package com.example.projet.services;

import com.example.projet.dao.CartRepository;
import com.example.projet.entities.Cart;
import com.example.projet.entities.Item;
import com.example.projet.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {
    CartRepository cartRepository;
    ItemService itemService;

    public CartService(CartRepository cartRepository,
                       ItemService itemService){
        this.cartRepository = cartRepository;
        this.itemService = itemService;
    }

    public Cart getCartByUser(User user) {
        return user.getCart();
    }

    public Item addNewItem(User user, Item item) {
        Cart cart = getCartByUser(user);
        itemService.decrementItemQuantity(item);
        List<Item> items = cart.getItems();
        items.add(item);
        cart.setItems(items);
        cart.setSomme(cart.getSomme() + item.getPrice());
        cartRepository.save(cart);
        return item;
    }

    public Cart removeItem(User user, Item item) {
        Cart cart = getCartByUser(user);
        List<Item> items = cart.getItems();
        items.remove(item);
        itemService.incrementItemQuantity(item);
        cart.setItems(items);
        cart.setSomme(cart.getSomme() - item.getPrice());
        return cartRepository.save(cart);

    }

    public Cart purchaseCart(User user) {
        Cart cart = user.getCart();
        cart.setItems(new ArrayList<>());
        cart.setSomme(0);
        return cartRepository.save(cart);

    }

    public void emptyingCart(Cart cart){
        cart.getItems().forEach(item -> itemService.incrementItemQuantity(item));
        cartRepository.save(cart);
    }

    public Integer getPriceCart(User user) {
        return getCartByUser(user).getSomme();
    }
}
