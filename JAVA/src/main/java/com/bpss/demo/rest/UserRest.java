package com.bpss.demo.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bpss.demo.classes.Todo;
import com.bpss.demo.classes.User;

@RestController
public class UserRest {

	Map<String,String> mapUserAdress=new HashMap<String,String>() {{{
		put("Alice", "0x53edb7c73305ffc481d4922b7e690bdb045104d5");
		put("Bob","0xbd614350a880ffa6770b93614892a4e830e58206");
		put("Carlos","0x12e80ea3f4264e5bb7138254093cfee67370d3e8");
	}}};
	
	@RequestMapping(value="/user/{nom}",method=RequestMethod.GET)	
	public User getTodosUser(@PathVariable("nom") String nom) {
		User user=new User();
		user.setNom(nom);
		String address=mapUserAdress.get(nom);
		
		RestTemplate restTemplate=new RestTemplate();
		
		String restAdress="http://192.168.43.36:3000/todos?user="+address;
	    
	    Todo[] todos= restTemplate.getForObject(restAdress, Todo[].class);
		user.setTodos(Arrays.asList(todos));
		return user;
	}
}
