import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from '../create-about-us-component';



@NgModule({
  declarations: [
    AboutusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    AboutusComponent
  ]
})
export class AboutModule { }