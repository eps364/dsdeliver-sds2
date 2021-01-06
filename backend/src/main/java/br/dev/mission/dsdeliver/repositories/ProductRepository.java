package br.dev.mission.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.dev.mission.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>  {
	
	List<Product> findAllByOrderByNameAsc();
}
