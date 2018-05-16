package com.cultydata.controller;

import org.springframework.web.bind.annotation.RestController;

import com.cultydata.service.Iservice;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class Hello {
	
	@Autowired
	Iservice catalogService; 

    @RequestMapping("/index")
    public String index() {
        return "Greetings from Spring Boot!";
    } 
    
    @RequestMapping("/serv/catalog/")
    public String catalog() {
        return catalogService.getCatalog();
    } 
    
    @ApiOperation(value = "catalog", nickname = "catalog")
    @RequestMapping(method = RequestMethod.GET, path="/serv/catalog/product", produces = "application/json")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "id", value = "Product id", required = true, dataType = "string", paramType = "query")
      })
    @ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) 
    public String getProduce(@RequestParam(value="id") String id) { 
    	
			return catalogService.getProductFromCatalog(id);
			
    }
    
}
