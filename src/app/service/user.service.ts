import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUSer()
  {
    // const names=[
    //   {userId: 111, fname: "ABC"},
    //   {userId: 112, fname: "DEF"}
    // ];

    // return names;

    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
