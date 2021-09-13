package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.model.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repo;

	//Post employee into the database
	public Employee saveit(Employee employee) {
		return repo.save(employee);
	}
	
	
	//Post a list of Employees into the database
	public List<Employee> savelist(List<Employee> emp){
		return repo.saveAll(emp);
	}
	
	//List all the employees in the Database
	public List<Employee> listthem(){
		return repo.findAll();
	}
	

	//Find employee by the ID
	public Employee pick (long id) {
		return repo.findById(id).orElse(null);
		
	}
	
	
	//Delete the employee by the ID
	public void deleted(long id) {
		 repo.deleteById(id);
		 
	}
}
