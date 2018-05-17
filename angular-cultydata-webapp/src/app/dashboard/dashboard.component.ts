import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userId: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => this.userId = params.userId)
  }
}
