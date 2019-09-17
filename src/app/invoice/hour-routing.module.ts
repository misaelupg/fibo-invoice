import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHoursComponent } from './add-hours/add-hours.component';


const routes: Routes = [
  { path: 'hours', component: AddHoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourRoutingModule { }
