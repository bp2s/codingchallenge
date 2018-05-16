package com.cultydata.service;


import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.google.common.collect.ImmutableMap;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Service
public class CatalogServices implements Iservice {
	
	final static Logger logg = Logger.getLogger(CatalogServices.class);
	
	final GsonBuilder builder = new GsonBuilder();
	final Gson gson = builder.create();
	
	static final Map<String, String> productDB = ImmutableMap.<String, String>builder()
		    .put("11","Persil")
		    .build();
	
	
	@Override
	public String getProductFromCatalog(String id){
		logg.info("Start");

		String result = productDB.get(id);
		
		logg.info("Finish");

		return gson.toJson(result);
	}


	@Override
	public String getCatalog() {
		return gson.toJson(productDB);
	}
	
	

}
