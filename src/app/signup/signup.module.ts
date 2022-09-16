import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DisplayModule } from '../Display/display.module';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DisplayModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
