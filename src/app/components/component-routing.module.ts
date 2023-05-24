import { Routes } from '@angular/router';
import { ChartsjsComponent } from './chart/chartjs.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



export const ComponentRoutes: Routes = [
  {path:'chartjs',component:ChartsjsComponent,title:'ChartJS'},
  { path: '**', redirectTo: '404'},
  { path: '404', component: UnauthorizedComponent, title: '404 Not Found'}
]
