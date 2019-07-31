import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getUsers(){
    let url = 'https://api.github.com/users';
    return this.http.get(url).pipe(map(res => res));
  }
}
