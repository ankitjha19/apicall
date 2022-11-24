import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  show:any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    // this.show=this.userservice.addUSer();

    this.userservice.addUSer().subscribe(data=>{
      this.show=data;
    })

}
}
