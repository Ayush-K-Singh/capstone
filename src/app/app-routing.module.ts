import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { cartitemcomponent } from './cart/cart-item/cart-item.component';
import { Displaydata } from './Display/Products_UI/display.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {path:'landing', component:LandingComponent},
  {path:'manage', component:AdminComponent},
  {path:'cart',component:cartitemcomponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:'display', component:Displaydata},
  {path:'admin', component:AdminComponent},
  {path:'**',component:Displaydata},
  // {path:'',redirectTo:'login',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
