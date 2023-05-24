import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartsjsComponent } from '../components/chart/chartjs.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { FootereComponent } from './footer/footer.component';
import { ComponentsModule } from '../components';
import { DashboardLayoutRoutes } from './pages-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FootereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    ComponentsModule
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    SidebarComponent,
    FootereComponent
  ],
})
export class PagesModule { }
