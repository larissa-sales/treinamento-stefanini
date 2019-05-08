package com.stefanini.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Parent;
import com.stefanini.projeto.repository.ParentRepository;

@Service
public class ParentService {

	@Autowired
	private ParentRepository repository;
	
	public List<Parent> findAll() throws TreinaException {
		return (List<Parent>) repository.findAll();
	}
	
	public Parent salvar(Parent parent) throws TreinaException {
		return repository.save(parent);
	}

}