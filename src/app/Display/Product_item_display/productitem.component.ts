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
padded=false
wishitems:any[]=[]
  constructor(private _msgser:MessService, public router:Router, private _snackBar:MatSnackBar) { }
 @Input() proitem:any=[]
  ngOnInit(): void {
  }
//    add(){
//   //   let productExists = false;
//   //   for(let e in this.wishitems){
//   //         if(this.wishitems[e].id===this.proitem.id)
//   //         {
//   //           this.wishitems[e].qty=1;
//   //           productExists=true
//   //           break;
//   //         }
//   //       }
//   //       if(!productExists)
//   //       {
//   //         this.wishitems.push({
//   //           id:this.proitem.id,
//   //           name:this.proitem.name,
//   //            qty:1,
//   //            price:this.proitem.price,
//   //            image:this.proitem.image,
//   //            description:this.proitem.des
             
//   //         })
//   //       }  
//         // this.getTotal();
//     console.log(this._msgser.wishitems)
//     this._msgser.add(this.proitem);
//   }
// handleaddtocart(){
//   this._msgser.sendMsg(this.proitem)
//   this.padded=!this.padded
// }

// viewClicked(){
//   this.router.navigate(['/product-description', this.proitem.id])
// }


public lstadd:any=[]
handleaddtocart(){
  this._msgser.sendMsg(this.proitem)
  console.log(this.lstadd=this.proitem)
 
let Ref=  this._snackBar.open("Item Added", 'Undo',{
    duration:2000
  });
 Ref.onAction().subscribe(()=>{
  console.log(this._msgser.cartitems)
  console.log(this.lstadd)
 
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
 
 
 
 })})}

}