import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../Model/user.model';
import { Observable, of } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient, private appConfigService: AppConfigService) { 
    
    this.baseUrl = this.appConfigService.apiBaseUrl;
  }
  
  baseUrl : string = 'https://localhost:5001/Users'
  fromData: User = new User();
  usersList: User[] =[];

  ngOnInit(): void {
    
  }
  
  GetUsers(): Observable<User[]> {    
    console.debug("GetUsers");        
    return this.http.get<User[]>(this.baseUrl)
  }
  
  





}
