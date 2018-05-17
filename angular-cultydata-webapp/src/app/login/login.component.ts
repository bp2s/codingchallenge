import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name: string;
  pass: string;
  message: string;

  constructor(private service: UserService, private router: Router) {
  }


  login() {
    if (this.service.login(this.name, this.pass)) {
      this.message = '';
      this.router.navigate(['/dashboard', this.name]);
    } else {
      this.message = 'Unknown user';
    }
  }

}
