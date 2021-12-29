package com.example.projet.services;

import com.example.projet.dao.ItemRepository;
import com.example.projet.dto.ItemDTO;
import com.example.projet.entities.Item;
import com.example.projet.exceptions.ItemNotFoundException;
import com.example.projet.exceptions.ItemQuantityException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public Item addItem(ItemDTO itemDTO) {
        Item newItem = new Item();
        newItem.setName(itemDTO.getName());
        newItem.setPrice(itemDTO.getPrice());
        newItem.setQuantity(itemDTO.getQuantity());
        return itemRepository.save(newItem);
    }

    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item updateItem(Long id, ItemDTO itemDTO) {
        Item updateItem = getItemById(id);
        updateItem.setPrice(itemDTO.getPrice());
        updateItem.setName(itemDTO.getName());
        updateItem.setQuantity(itemDTO.getQuantity());
        return itemRepository.save(updateItem);
    }

    public List<Item> deleteItem(Long id) {
        Item deleteItem = getItemById(id);
        itemRepository.delete(deleteItem);
        return getAllItems();
    }

    public boolean itemAvailable(Item item){
        return item.getQuantity() > 0;
    }

    public void decrementItemQuantity(Item item) {
        if (itemAvailable(item)) {
            item.setQuantity(item.getQuantity() - 1);
            itemRepository.save(item);
        }else throw new ItemQuantityException();
    }

    public void incrementItemQuantity(Item item) {
        item.setQuantity(item.getQuantity() + 1);
        itemRepository.save(item);
    }

    public List<Item> getItemsBySearch(String search) {
        return itemRepository.findItemsByNameLike(search);
    }

}