import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../Models/product";
import { MessService } from '../../service/Product_Add_Messanger/mess.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  padded:string|null=''

  constructor(private _msgser:MessService, public router:Router, private _snackBar:MatSnackBar) { }
 @Input() proitem:any=[]
  ngOnInit(): void {
  }


  public lstadd:any=[]
  handleaddtocart(){
    if(localStorage.getItem('logoutvalue')==='true')
    {
      localStorage.clear()
     }
    this.padded=localStorage.getItem('logvalue')
    console.log(this.padded)
    if(this.padded==='true')
    {
      this._msgser.sendMsg(this.proitem)
    this.lstadd=this.proitem
    let Ref=  this._snackBar.open("Item Added", 'Undo',{
      duration:2000
    });
    Ref.onAction().subscribe(()=>{
      console.log(this._msgser.cartitems)
      this._msgser.cartitems.forEach((element:any) => {
        if(element.id==this.lstadd.id )
        {
          if(element.qty>1)
          {
            element.qty--
          }
          else{
            this._msgser.cartitems.splice(this._msgser.cartitems.indexOf(element),1)
          }
        }
      })})
    }
    else 
    {
  alert("first log in")
    }
    
    }
  
  
}