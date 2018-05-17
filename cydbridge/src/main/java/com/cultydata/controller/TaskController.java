package com.cultydata.controller;

import org.springframework.web.bind.annotation.RestController;

import com.cultydata.service.Iservice;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class TaskController {
	
	//Un peu crado tt ça
	static final Map<String, String> userBlockchainAccount = new HashMap<>();
	static {

		userBlockchainAccount.put("alice","0x627306090abab3a6e1400e9345bc60c78a8bef57");
		userBlockchainAccount.put("bob","0xf17f52151ebef6c7334fad080c5704d77216b732");
		userBlockchainAccount.put("carlos","0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef");

	}
	
	@Autowired
	Iservice blockchainService; 

    @RequestMapping("/index")
    public String index() {
        return "Greetings from Spring Boot!";
    } 
    
    @ApiOperation(value = "taskcatalog", nickname = "taskcatalog")
    @RequestMapping(method = RequestMethod.GET, path="/api/tasks", produces = "application/json")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "username", value = "User Name", required = true, dataType = "string", paramType = "query")
      })
    @ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) 
    public String getProduce(@RequestParam(value="username") String username) { 
    	
			return blockchainService.getUserFromBlockChainFake(userBlockchainAccount.get(username));
			
    }
    
}
