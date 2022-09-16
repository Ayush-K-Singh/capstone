import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent): boolean {
   
    if(component.createUserForm.dirty){
        if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
            return true;
        } else {
            return false;
        }
    }
    return true;
  }
}