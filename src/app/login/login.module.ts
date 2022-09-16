import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DisplayModule } from '../Display/display.module';
import { CanDeactivateGuard } from '../can-deactivate.guard';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DisplayModule
  ],
  providers: [CanDeactivateGuard],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
