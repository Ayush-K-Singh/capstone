import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor() { }

  // credentials = {
  //   "a@gmail.com":{name:"ayush", password:12345},
  //   "b@gmail.com":{name:"sachin", password:67890}
  //   // user2:"user2@password",
  //   // admin:"admin1@password"
  // }

  credentials = [
    {email:'a@gmail.com',password:1234},
    {email:'b@gmail.com',password:5678}
  ]

  subject$ = new Subject();

  ngOnInit(){
  }

  log = true
  serviceClicked(){
    this.subject$.next(this.log)
  }
}
