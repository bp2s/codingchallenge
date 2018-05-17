package com.cultydata.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class BlockChainServices implements Iservice {

	final static Logger logg = Logger.getLogger(BlockChainServices.class);

	// {"0":"aller en vacances","1":"prendre un cafe","2":"acheter du beurre"}
	// 0x627306090abab3a6e1400e9345bc60c78a8bef57
	// 0xf17f52151ebef6c7334fad080c5704d77216b732
	// 0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef
	static final Map<String, String> fakeblockchain = new HashMap<>();
	static {

		fakeblockchain.put("0x627306090abab3a6e1400e9345bc60c78a8bef57",
				"{\"0\":\"aller en vacances\",\"1\":\"prendre un cafe\",\"2\":\"acheter du beurre\"}");
		fakeblockchain.put("0xf17f52151ebef6c7334fad080c5704d77216b732",
				"{\"0\":\"traire una vache\",\"1\":\"jouer au foot\",\"2\":\"etudier les groupe de lorentz\"}");
		fakeblockchain.put("0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef",
				"{\"0\":\"cultiver des patate\",\"1\":\"passer un entretien avec Vincent\",\"2\":\"passer un entretien avec Patricia\"}");

	}

	@Override
	public String getUserFromBlockChainFake(String accountId) {
		return fakeblockchain.get(accountId);
	}
	
	@Override
	//Study to use springHttp to easy integrate services
	public String getUserFromBlockChain(String accountId) {
		
		HttpClient client = new HttpClient();
		
		//http://192.168.8.102:3000/todos?user=0x627306090abab3a6e1400e9345bc60c78a8bef57
		String url = "http://192.168.8.102:3000/todos?user="+accountId;		
		
		HttpMethod method = new GetMethod(url);
		
		
		// Retry en cas de soucis de connection
	    method.getParams().setParameter(HttpMethodParams.RETRY_HANDLER, 
	    		new DefaultHttpMethodRetryHandler(3, false));
	    String result = null;

	    try {
	      // Status handling
	      int statusCode = client.executeMethod(method);

	      if (statusCode != HttpStatus.SC_OK) {
	    	  	logg.error("Method failed: " + method.getStatusLine());
	      }

	      // Read the response body.
	      byte[] responseBody = method.getResponseBody();

	      // Deal with the response.
	      // Use caution: ensure correct character encoding and is not binary data
	      result = new String(responseBody);

	    } catch (HttpException e) {
	    		logg.error("Fatal protocol violation: " + e.getMessage());
	    		e.printStackTrace();
	    } catch (IOException e) {
	   		logg.error("Fatal transport error: " + e.getMessage());
	      e.printStackTrace();
	    } finally {
	      // Release the connection.
	      method.releaseConnection();
	    }
		return result;  
	  }
}
