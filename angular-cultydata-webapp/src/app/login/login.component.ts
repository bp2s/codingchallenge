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

  constructor(private service: UserService, private router: Router) {
  }


  login() {
    if (this.service.login(this.name, this.pass)) {
      this.router.navigate(['/dashboard']);
    }
  }

}
