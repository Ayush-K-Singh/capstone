import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public serv:LoginService) { }

  ngOnInit(): void {
  }

  check:any = true

  onClick(){
    this.serv.subject$.subscribe(val => {
      this.check = val
    })
    console.log(this.check)
  }

}
