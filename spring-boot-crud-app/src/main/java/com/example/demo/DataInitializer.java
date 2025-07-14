package com.example.demo;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Add some sample products
        productRepository.save(new Product("Laptop", "Dell XPS 13", 1299.99));
        productRepository.save(new Product("Smartphone", "Samsung Galaxy S21", 799.99));
        productRepository.save(new Product("Headphones", "Sony WH-1000XM4", 349.99));
        productRepository.save(new Product("Smartwatch", "Apple Watch Series 7", 399.99));
        
        System.out.println("Sample data has been loaded!");
    }
}
