package br.dev.mission.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.dev.mission.dsdeliver.dto.OrderDTO;
import br.dev.mission.dsdeliver.dto.ProductDTO;
import br.dev.mission.dsdeliver.entities.Order;
import br.dev.mission.dsdeliver.entities.OrderStatus;
import br.dev.mission.dsdeliver.entities.Product;
import br.dev.mission.dsdeliver.repositories.OrderRepository;
import br.dev.mission.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());

	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(),
				OrderStatus.PENDING);

		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}

		order = repository.save(order);
		return new OrderDTO(order);
	}
}
