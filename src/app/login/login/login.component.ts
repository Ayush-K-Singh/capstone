import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, public logInCheck:LoginService) { }

  ngOnInit(): void {
    // localStorage.setItem('user', 'false')
    // localStorage.setItem('admin', 'false')

  }

  userEmailInDB = ''
  userPasswordInDB = ''

  showUser = false
  showAdmin = false

  onSubmit(loginForm:NgForm){
    this.userEmailInDB = loginForm.value.userEmailEntered
    this.userPasswordInDB = loginForm.value.userPasswordEntered

    if((this.userEmailInDB === "user1@gmail.com" && this.userPasswordInDB === "user1") || (this.userEmailInDB === "user2@gmail.com" && this.userPasswordInDB === "user2") || (this.userEmailInDB === "user3@gmail.com" && this.userPasswordInDB === "user3") || (this.userEmailInDB === "user4@gmail.com" && this.userPasswordInDB === "user4")){
      // this.showUser = !this.showUser
      // localStorage.setItem('user', 'true')
      // localStorage.setItem('admin', 'false')
      this.logInCheck.userLoggedIn = !this.logInCheck.userLoggedIn
      this.router.navigate(['/display'])
      console.log("User Logged In");
    }else{
      console.log("Wrong Credentials");
    }

    if(this.userEmailInDB === "admin@gmail.com" && this.userPasswordInDB === "admin"){
      this.showAdmin = !this.showAdmin
      // localStorage.setItem('admin', 'true')
      // localStorage.setItem('user', 'true')
      this.logInCheck.adminLoggedIn = !this.logInCheck.adminLoggedIn
      this.router.navigate(['/display'])
      console.log("Admin Logged In")
    }else{
      console.log("Wrong Credentials")
    }
    
  }

  signupClicked(){
    this.router.navigate(['/signup'])
  }

}
