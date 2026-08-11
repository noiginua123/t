package com.example.quanlyhaisan;

import com.example.quanlyhaisan.model.Seafood;
import com.example.quanlyhaisan.repository.SeafoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuanlyhaisanApplication implements CommandLineRunner {

	@Autowired
	private SeafoodRepository seafoodRepository;

	public static void main(String[] args) {
		SpringApplication.run(QuanlyhaisanApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Seafood obj1 = new Seafood();
		obj1.setName("Han Lap");
		obj1.setPrice(59994);
		obj1.setAddress("Seattle");
		seafoodRepository.save(obj1);

		Seafood obj2 = new Seafood();
		obj2.setName("Vuong Lam");
		obj2.setPrice(3000);
		obj2.setAddress("Hanoi");
		seafoodRepository.save(obj2);

		Seafood obj3 = new Seafood();
		obj3.setName("Thach Hao");
		obj3.setPrice(9393);
		obj3.setAddress("Ninh Binh");
		seafoodRepository.save(obj3);
	}
}