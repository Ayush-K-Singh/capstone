// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AdminModule } from './admin/admin.module';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
// import { LoginModule } from './login/login.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LandingComponent } from './landing/landing.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LandingComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     LoginModule,
//     HomeModule,
//     AdminModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CartItemModule } from './cart/cart-item.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductApiService } from './service/InBuild_Web_Api/apiservice.service';
import { MessService } from './service/Product_Add_Messanger/mess.service';
import { ServiceService } from './service/service.service';
import { DisplayModule } from './Display/display.module';
import { HeaderComponent } from './header/header.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
// import { DashBoardComponent } from './Dashboard/dashboard-component';
// import { LoginComponent } from './Login Details/login-component';
// import { LoginServiceComponent } from './Services/login-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SignupComponent } from './Signup Details/create-signup';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { LoginModule } from './login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { SignupModule } from './signup/signup.module';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AboutModule } from './Aboutus/AboutusModule/aboutus-module';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    // LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,CartItemModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,ReactiveFormsModule,
    DisplayModule,FormsModule,MatSelectModule,MatButtonModule,RouterModule,
  HttpClientInMemoryWebApiModule.forRoot(ProductApiService),HttpClientModule,
  LoginModule,
  NgbModule,
  SignupModule,
  AboutModule

  ],
  providers: [ServiceService,MessService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
