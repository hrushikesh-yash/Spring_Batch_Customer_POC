package com.javatechie.spring.batch.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.spring.batch.entity.CountruWiseCount;
import com.javatechie.spring.batch.entity.Customer;
import com.javatechie.spring.batch.repository.CustomerRepository;

@Service
public class CustomerManagerImpl implements CustomerManager {
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public List<CountruWiseCount> getDataByCountry() {
		Set<String> country = customerRepository.findAll().stream().map(list -> list.getCountry())
				.collect(Collectors.toSet());
		List<CountruWiseCount> countryList= new ArrayList<>();
		country.forEach((con) ->{
			countryList.add(new CountruWiseCount(con,customerRepository.getDataByCountry(con)));
		});
		return countryList;
	}

	@Override
	public List<Customer> getAllCustomers() {
		
		return customerRepository.findAll().stream().sorted(Comparator.comparing(Customer::getId)).collect(Collectors.toList());
	}

}
