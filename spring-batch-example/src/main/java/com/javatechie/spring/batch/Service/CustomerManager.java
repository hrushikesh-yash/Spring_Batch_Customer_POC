package com.javatechie.spring.batch.Service;

import java.util.List;

import com.javatechie.spring.batch.entity.CountruWiseCount;
import com.javatechie.spring.batch.entity.Customer;

public interface CustomerManager {
	
	List<CountruWiseCount>  getDataByCountry();
	
	List<Customer> getAllCustomers();

}
