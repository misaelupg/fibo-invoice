import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    redirectTo: '/invoice',
    pathMatch: 'full'
  },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule'},
  { path: 'project', loadChildren: './project/project.module#ProjectModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
