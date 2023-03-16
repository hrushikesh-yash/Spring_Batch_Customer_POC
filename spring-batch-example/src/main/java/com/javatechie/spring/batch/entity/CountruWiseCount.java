package com.javatechie.spring.batch.entity;

public class CountruWiseCount {
	
	private String countryName;
	private int countryCount;
	
	public CountruWiseCount()
	{}

	public CountruWiseCount(String countryName, int countryCount) {
		super();
		this.countryName = countryName;
		this.countryCount = countryCount;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public int getCountryCount() {
		return countryCount;
	}

	public void setCountryCount(int countryCount) {
		this.countryCount = countryCount;
	}
	
	
	

}
