import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Displaydata } from './Products_UI/display.component';
import { RouterModule } from '@angular/router';
import { ProductitemComponent } from './Product_item_display/productitem.component';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiService } from '../service/InBuild_Web_Api/apiservice.service';
import { MessService } from '../service/Product_Add_Messanger/mess.service';
import { ServiceService } from '../service/service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// import { FooterComponent } from '../footer/footer.component';
// import { HeaderComponent } from '../header/header.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LandingComponent } from '../landing/landing.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [Displaydata,ProductitemComponent,HeaderComponent,FooterComponent, LandingComponent],
  imports: [
    CommonModule,BrowserAnimationsModule,RouterModule,
    MatInputModule,MatButtonModule,MatFormFieldModule,MatSelectModule,ReactiveFormsModule,
     HttpClientInMemoryWebApiModule.forRoot(ProductApiService),HttpClientModule,FormsModule,
     NgbModule,
     MatSnackBarModule
  ],
  exports:[Displaydata,ProductitemComponent, HeaderComponent],
  providers: [ServiceService,MessService,],
})
export class DisplayModule { }