var express = require('express');
var router = express.Router();
var config = require('config');

var Web3 = require('web3')
//var web3 = new Web3("http://127.0.0.1:8545");

var web3 = new Web3(new Web3.providers.HttpProvider(config.get('provider')));


var abi = require('../smart_contract/todos.json')
var todoscontract = new web3.eth.Contract(abi, config.get('smartcontractaddress'));

/* GET todos listing. */
router.get('/', function (req, res, next) {
  
  // console.log(req.query)
  // todoscontract.methods.todosmap(req.query.user).call()
  todoscontract.methods.getTodos(req.query.user).call()
    .then(function (result) {
      // console.log(result)
      res.send(result)
    })
});

module.exports = router;
