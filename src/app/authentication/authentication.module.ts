import { NgModule } from '@angular/core';
import { UserLoginComponent } from './login/loginuser.component';
import { ChangePassComponent } from './changepassword/changePassword.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
  UserLoginComponent,
  ChangePassComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
