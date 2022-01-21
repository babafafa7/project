package com.example.projet;

import com.example.projet.dao.CartRepository;
import com.example.projet.dao.ItemRepository;
import com.example.projet.dao.UserRepository;
import com.example.projet.entities.Cart;
import com.example.projet.entities.Item;
import com.example.projet.entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
public class ProjetApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetApplication.class, args);
	}

	@Bean
	CommandLineRunner start(UserRepository userRepository, ItemRepository itemRepository, CartRepository cartRepository){
		return args ->{
			User user1 = new User(null, "John", "Doe", "john.doe@gmail.com",new Cart());
			User user2 = new User(null, "Alice", "Dupont", "alice.dupont@yahoo.frm",new Cart());
			User user3 = new User(null, "Gerard", "Martin", "gerard.martin@gmail.com",new Cart());
			User user4 = new User(null, "Jules", "Bernard", "jules.Bernard@outlook.fr",new Cart());
			User user5 = new User(null, "Adèle", "Thomas", "Adèle.Thomas@sfr.fr",new Cart());

			userRepository.saveAll(Arrays.asList(user1, user2, user3, user4, user5));

			Item item1 = new Item(null,"Iphone 13",1000,10);
			Item item2 = new Item(null,"Clé USB 16go",15,5);
			Item item3 = new Item(null,"TV Samsung 4K",1500,1);
			Item item4 = new Item(null,"Enceinte bluetooth ",200,7);
			Item item5 = new Item(null,"PC Asus Zenbook 14",699,12);

			itemRepository.saveAll(Arrays.asList(item1,item2,item3,item4,item5));
		};
	}
}
