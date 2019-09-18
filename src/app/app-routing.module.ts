import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'invoice', loadChildren: './invoice/hour.module#HourModule'},
  { path: 'project', loadChildren: './project/project.module#ProjectModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
