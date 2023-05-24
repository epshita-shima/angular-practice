import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './authentication/login/loginuser.component';
import { DashboardLayoutRoutes } from './pages/pages-routing.module';
import { AuthenticationRoutes } from './authentication/authentication-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutes,
    PagesModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
