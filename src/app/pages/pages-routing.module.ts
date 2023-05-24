import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from '../components';

export const DashboardLayoutRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    loadChildren: () =>
      import('../components/components.module').then((m) => m.ComponentsModule),
      title:'Authentication'
  }];

// const routes: Routes = [
//   {
//     path: '',
//     component: PagesComponent,
//     children: [
//       { path: 'dashboard', component: DashboardComponent, title: 'Dashborad' },
//     ],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class DashboardLayoutRoutes {}
