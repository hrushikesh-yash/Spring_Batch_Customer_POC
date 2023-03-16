package com.javatechie.spring.batch.controller;

import java.util.List;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.JobParametersInvalidException;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.spring.batch.Service.CustomerManager;
import com.javatechie.spring.batch.entity.CountruWiseCount;
import com.javatechie.spring.batch.entity.Customer;

@RestController
@RequestMapping("/jobs")
@CrossOrigin("*")
public class JobController {

	@Autowired
	private JobLauncher jobLauncher;

	@Autowired
	private Job job;

	@Autowired
	private CustomerManager customerManager;

	@PostMapping("/importCustomers")
	public void importCsvToDBJob() {
		JobParameters jobParameters = new JobParametersBuilder().addLong("startAt", System.currentTimeMillis())
				.toJobParameters();
		try {
			jobLauncher.run(job, jobParameters);
		} catch (JobExecutionAlreadyRunningException | JobRestartException | JobInstanceAlreadyCompleteException
				| JobParametersInvalidException e) {
			e.printStackTrace();
		}
	}

	@GetMapping("/getDataByCountry")
	public List<CountruWiseCount> getDataByCountry() {

		return customerManager.getDataByCountry();
	}

	@GetMapping("/getAllCustomers")
	public List<Customer> getAllCustomers() {
		return customerManager.getAllCustomers();
	}
}
