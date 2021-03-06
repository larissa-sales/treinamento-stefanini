package com.stefanini.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stefanini.projeto.exception.TreinaException;
import com.stefanini.projeto.model.Parent;
import com.stefanini.projeto.service.ParentService;

@CrossOrigin
@Controller
@RequestMapping(value = "/parent")
public class ParentController {

	@Autowired
	private ParentService service;
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<Parent> findAll() throws TreinaException {
		return service.findAll();
	}	
	
	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Parent salvar(@RequestBody Parent parent) throws TreinaException {
		return service.salvar(parent);
	}	
	
/*	@RequestMapping(method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Parent deletar(@RequestBody Parent parent) throws TreinaException {
		return service.deletar(parent);
	}*/	

}