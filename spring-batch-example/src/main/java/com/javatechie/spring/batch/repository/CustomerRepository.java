package com.javatechie.spring.batch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.javatechie.spring.batch.entity.Customer;

public interface CustomerRepository  extends JpaRepository<Customer,Integer> {
	
	@Query("select count(*) as peopleCount from Customer where country=:country")
	public int getDataByCountry(@Param("country") String country);
}
