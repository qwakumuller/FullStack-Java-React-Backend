package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.Service.EmployeeService;
import com.example.demo.model.Employee;
@CrossOrigin(origins="http://localhost:3000")
@RestController
//@RequestMapping("/employee") Can be used if you want this to start at the beginning of all the endepoints
public class EmployeeController {

	
	
	// This allow us to get instance of EmployeeService from the Spring Container
	@Autowired
	private EmployeeService serv;
	
	
	// This endpoint allow us to list all the employee by interacting with the method from EmployeeService
	@GetMapping("/log")
	public List<Employee> show(){
		return serv.listthem();
		
	}
	// This endpoint is used to send data into the database
		@PostMapping("/log")
		public Employee add(@RequestBody Employee employee) {
			return serv.saveit(employee);
		}
		
	// I mostly do this to run my application on a browser and have some good visuals
	@GetMapping("/")
	public ModelAndView first() {
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index");
		return mv;
	}
	
	// This endpoint is used to delete an Employee
	@DeleteMapping("/delete/{employeeID}")
	public void deletesome(@PathVariable long employeeID) {
		serv.deleted(employeeID);
	}
	
	//This endpoint is used to find users by ID
	@GetMapping("/log/{employeeID}")
	public Employee picker(@PathVariable long employeeID) {
		return serv.pick(employeeID);
	}
	
	
//This is used to change data that already exist in the database	
	@PutMapping("/update/{employeeID}")
	public Employee updating(@PathVariable long employeeID, @RequestBody Employee employee) {
		Employee employees = serv.pick(employeeID);
		employees.setEmployeeID(employeeID);
		employees.setFirstName(employee.getFirstName());
		employees.setLastName(employee.getLastName());
		employees.setCountry(employee.getCountry());
		employees.setDepartment(employee.getDepartment());
		System.out.println(employeeID);
		
		
		return serv.saveit(employee);
	}
	
	
	
	
	
}
