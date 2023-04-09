package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@SpringBootTest
public class productunittest {
	@Autowired
	ProductRepository productRepository;

	@Test
	public void testProductSave() {
		Product product = new Product();
		product.setId(2L);
		product.setTitle("15W 4-in-1 Fast Wireless Charger");
		product.setDescription("WFast Wireless Charger 15W with Type-C Port\r\n"
				+ "60 Degree Ergonomic Design\r\n"
				+ "Vertically & Horizontally Charging\r\n"
				+ "Charging station adopt dual high-purity coil design\r\n"
				+ "6 Months Warranty");
		product.setCategory("Wireless Chargers");
		product.setPrice((long) 12990);
		product.setImage("https://wish.lk/wp-content/uploads/2023/02/01-49-1.jpg");
		productRepository.save(product);
		assertNotNull(productRepository.findById(2L).get());
	}

	@Test
	public void testReadAllProduct() {
		List<Product> list = productRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void testUpdateProduct() {
		Product product = productRepository.findById(2L).get();
		product.setTitle("Green Lion 15W 4-in-1 Fast Wireless Charger");
		productRepository.save(product);
		assertNotEquals("15W 4-in-1 Fast Wireless Charger", productRepository.findById(2L).get().getTitle());
	}

	@Test
	public void testDelete() {
		productRepository.deleteById(1L);
		assertThat(productRepository.existsById(1L)).isFalse();
	}

}
