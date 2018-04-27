import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ],
})
export class AppComponent {
  title = 'app';

  todos = [];

  constructor(private appService: AppService) { }

  showTodo(username : string) {
    this.appService.getUser(username)
      .subscribe(todos => this.todos = todos);
  }
}
