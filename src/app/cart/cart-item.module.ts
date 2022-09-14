import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartitemcomponent } from './cart-item/cart-item.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [cartitemcomponent,],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[cartitemcomponent]
})
export class CartItemModule { }