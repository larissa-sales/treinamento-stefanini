package com.stefanini.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Bahia;
import com.stefanini.projeto.repository.BahiaRepository;

@Service
public class BahiaService {

	@Autowired
	private BahiaRepository repository;
	
	public List<Bahia> findAll() throws TreinaException {
		return (List<Bahia>) repository.findAll();
	}

}