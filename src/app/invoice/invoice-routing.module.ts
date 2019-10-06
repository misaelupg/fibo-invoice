import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesAddComponent } from './activities-add/activities-add.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';


const routes: Routes = [
  { path: '', component: ActivitiesListComponent },
  { path: 'add', component: ActivitiesAddComponent },
  { path: 'list', component: ActivitiesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
