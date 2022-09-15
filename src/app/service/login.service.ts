import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor() { }

  ngOnInit(){
  }

  userLoggedIn = false
  adminLoggedIn = false
}
