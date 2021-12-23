package com.example.projet.controller;

import com.example.projet.dto.ItemDTO;
import com.example.projet.entities.Item;
import com.example.projet.services.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path="/item")
public class ItemController {
    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }


    @PostMapping(path = "/add")
    public ResponseEntity<Item> addNewItem(@Valid @RequestBody ItemDTO itemDTO){
        return new ResponseEntity<>(itemService.addItem(itemDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") Long id){
        return new ResponseEntity<>(itemService.getItemById(id), HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<Item>> getAllItems(){
        return new ResponseEntity<>(itemService.getAllItems(), HttpStatus.OK);
    }

    @PutMapping(path = "/{id}/update")
    public ResponseEntity<Item> updateItem(@PathVariable("id") Long id,
                                           @Valid @RequestBody ItemDTO itemDTO){
        return new ResponseEntity<>(itemService.updateItem(id, itemDTO), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable("id") Long id){
        return new ResponseEntity<>(itemService.deleteItem(id), HttpStatus.OK);
    }

}
