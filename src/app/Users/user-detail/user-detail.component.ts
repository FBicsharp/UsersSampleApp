import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user.model';


import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  
  constructor(public service:UserService) { } 
  users: User[] = [];
  showUsersData : boolean =false;
  loading : boolean =true;

  ngOnInit(): void {   
    this.GetUsers();
  }
  
  GetUsers(): void {    
    this.loading  =true;        
    console.info("GetUsers");
    // this.service.GetUsers()
    // .subscribe(users => {
    //   this.users = users;
    //   this.showUsersData = this.users.length>0;
    //   this.loading  =false;    
    // } );  
    this.service.GetUsers()
    .subscribe(
      data => {
        this.users = data;
        this.showUsersData = this.users.length>0;
        this.loading  =false;    
      },
      error =>{        
        this.showUsersData = this.users.length>0;
        this.loading  =false; 
      } 
    );
    

  }

  RefrashData():void{
    console.info("RefrashData");
    this.GetUsers()
  }

}
