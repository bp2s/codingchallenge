pragma solidity ^0.4.21;
//pragma experimental ABIEncoderV2;

contract todos {
    
    address public owner;
    
    struct todo {
        string todo1;
        string todo2;
        string todo3;
    }
    
    mapping (address => todo) public todosmap;
    
    constructor () public {
        owner = msg.sender;
        todosmap[owner] = todo("have fun", "prepare holidays","go to restaurant");
    }
    
    function addTodo (string _todo1, string _todo2, string _todo3) public {
        todosmap[msg.sender] = todo(_todo1, _todo2, _todo3);
    }
    
    function getTodos(address _add) public view returns (string, string, string) {
        return (todosmap[_add].todo1, todosmap[_add].todo2, todosmap[_add].todo3);
    }
    
}