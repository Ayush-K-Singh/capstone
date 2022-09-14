import { Component } from "@angular/core";
import { MessService } from "../../service/Product_Add_Messanger/mess.service";
@Component({
    selector:'cart',
    templateUrl:'./cart-item.component.html',
    styleUrls:['cart-item.component.css']
})
export class cartitemcomponent{
    cart:any=[]
    price:any;
constructor(private _msgser:MessService){}
ngOnInit(){
   console.log( this.cart=this._msgser.cartitems)
   this.price=this._msgser.getTotal();
   console.log(this.price)
   console.log(this._msgser.wishitems);
}

emptycart(){
    this.cart.splice(0,this.cart.length);
}
removeItem(del:any){
if(del.qty>1)
{
    del.qty--;
    this.price = this._msgser.getTotal()
}
else{
    this.cart.splice(del,1);
    this.price = this._msgser.getTotal()
}
}
}