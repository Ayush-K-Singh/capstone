import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../Models/product";
import { MessService } from '../../service/Product_Add_Messanger/mess.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
padded=false
wishitems:any[]=[]
  constructor(private _msgser:MessService) { }
 @Input() proitem:any=[]
  ngOnInit(): void {
  }
   add(){
  //   let productExists = false;
  //   for(let e in this.wishitems){
  //         if(this.wishitems[e].id===this.proitem.id)
  //         {
  //           this.wishitems[e].qty=1;
  //           productExists=true
  //           break;
  //         }
  //       }
  //       if(!productExists)
  //       {
  //         this.wishitems.push({
  //           id:this.proitem.id,
  //           name:this.proitem.name,
  //            qty:1,
  //            price:this.proitem.price,
  //            image:this.proitem.image,
  //            description:this.proitem.des
             
  //         })
  //       }  
        // this.getTotal();
    console.log(this._msgser.wishitems)
    this._msgser.add(this.proitem);
  }
handleaddtocart(){
  this._msgser.sendMsg(this.proitem)
  this.padded=!this.padded
}
}