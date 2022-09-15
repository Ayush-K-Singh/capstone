import { Component, OnInit, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';
import { LoginService } from '../service/login.service';
import { MessService } from '../service/Product_Add_Messanger/mess.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{

  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private  _msgser : MessService,private _productsService:ServiceService, public logincheck:LoginService) { }

  product:any=[]

  ngOnInit(): void {
    this._msgser.cartitems.forEach((item:any)=>{
      this.totalItem +=item.qty
      console.log(this._msgser.cartitems.length)
   });
  }

  submit(searchform:NgForm){
    let serachvalue:string=''

    serachvalue=searchform.form.controls['search'].value

    console.log(serachvalue);

    if(this._productsService.getProducts().subscribe((data:Product[])=>{data.find((x=>x.name===serachvalue))})){
      this._productsService.getProducts().subscribe((data:Product[])=>{
      this.product.push(data.find((x=>x.name===serachvalue)))})
      console.log(this.product)
      this._msgser.subject$.next(this.product)
    
    }
    this.product.splice(0,this.product.length)
  }

  user:any = false
  admin:any = false

  ngDoCheck(): void {
    // this.user = localStorage.getItem('user')
    // this.admin = localStorage.getItem('admin')
    this.user = this.logincheck.userLoggedIn
    this.admin = this.logincheck.adminLoggedIn
  }
  


  logoutClicked(){
    // localStorage.setItem('user','false')
    // localStorage.setItem('admin','true')
    this.logincheck.userLoggedIn = false
    this.logincheck.adminLoggedIn = false
    console.log(this.user)
    console.log(this.admin)
  }
}