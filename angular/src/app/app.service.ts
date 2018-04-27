import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {
  url = 'user';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  getUser (name: string): Observable<String[]> {
    return this.http.get<String[]>(this.url + '/' + name);
  }
}
