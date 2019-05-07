package com.stefanini.projeto.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.stefanini.projeto.model.Parent;

public interface ParentRepository extends CrudRepository<Parent, Long>{
	
	List<Parent> findByNome(String nome);
}
