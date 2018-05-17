import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  users: User[] = [
    {name: "alice", pass: "alice"},
    {name: "bob", pass: "bob"},
    {name: "carlos", pass: "carlos"},
  ];


  login(name: string, pass: string): boolean {
    const user = this.users.find(user => user.name === name);
    if (user != null && user.pass === pass) {
      return true;
    }
    return false;
  }

}
