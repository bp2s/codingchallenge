package com.bpss.demo.classes;

import java.util.ArrayList;
import java.util.List;

public class User {
	
	private String nom;
	private List<Todo> todos=new ArrayList<Todo>();
	
	
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public List<Todo> getTodos() {
		return todos;
	}
	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}
	
	

}
