import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userEmailInDB = ''
  userPasswordInDB = ''

  showUser = false
  showAdmin = false

  onSubmit(loginForm:NgForm){
    this.userEmailInDB = loginForm.value.userEmailEntered
    this.userPasswordInDB = loginForm.value.userPasswordEntered

    if((this.userEmailInDB === "user1@gmail.com" && this.userPasswordInDB === "user1") || (this.userEmailInDB === "user2@gmail.com" && this.userPasswordInDB === "user2") || (this.userEmailInDB === "user3@gmail.com" && this.userPasswordInDB === "user3") || (this.userEmailInDB === "user4@gmail.com" && this.userPasswordInDB === "user4")){
      this.showUser = !this.showUser
      console.log("User Logged In");
    }else{
      console.log("Wrong Credentials");
    }

    if(this.userEmailInDB === "admin@gmail.com" && this.userPasswordInDB === "admin"){
      this.showAdmin = !this.showAdmin
      console.log("Admin Logged In")
    }else{
      console.log("Wrong Credentials")
    }
    
  }

}
