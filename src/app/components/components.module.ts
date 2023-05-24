import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Components of this module
import { ComponentsComponent } from './components.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ComponentRoutes } from './component-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRoutes),
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    ComponentsComponent,
    UnauthorizedComponent
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class ComponentsModule { }
