import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/user.model';
import { MOCKUSERS } from '../Model/mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'https://localhost:5001/Users'

  constructor(private http: HttpClient) { }

  fromData: User = new User();
  usersList: User[] =[];

   GetUsers(): Observable<User[]> {    
    console.info("GetUsers")    
    return this.http.get<User[]>(this.baseUrl)
    
    //  .pipe(
    //   catchError(this.handleError<User[]>('GetUsers', []))
    // );
    
  }
  
  





}
