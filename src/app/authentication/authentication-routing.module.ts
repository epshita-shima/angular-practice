import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './login/loginuser.component';
import { ChangePassComponent } from './changepassword/changePassword.component';

const routes: Routes = [
  {
    path: "login",
    component: UserLoginComponent,
    title: "Login"
  },
  {
    path: "changepassword",
    component: ChangePassComponent,
    title: "Change Password"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutes { }
