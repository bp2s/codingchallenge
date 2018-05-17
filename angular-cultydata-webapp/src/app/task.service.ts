import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './tasks/task';

@Injectable()
export class TaskService {

  private tasksUrl = 'api/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  getTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl + '/user/' + userId);
  }

}
