package br.dev.mission.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.dev.mission.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>  {

}
