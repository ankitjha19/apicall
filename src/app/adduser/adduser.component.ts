import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 num: any;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.num=this.userservice.addUSer();
  }

}
