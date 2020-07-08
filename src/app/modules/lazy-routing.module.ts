import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';


const routes: Routes = [
  {
    path: '',
    component: ListEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
