package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MULLER")
public class Employee {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long employeeID;
	
	private String firstName;
	private String lastName;
	private String country;
	private String department;
	
	public Employee(String firstName, String lastName, String country, String department) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.department = department;
	}

	
	public Employee() {
		super();
	}


	public Long getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Long employeeID) {
		this.employeeID = employeeID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}
	
	
	

}
