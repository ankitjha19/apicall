import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUSer()
  {
    const names=[
      {userId: 111, fname: "ABC"},
      {userId: 112, fname: "DEF"}
    ];

    return names;
  }
}
