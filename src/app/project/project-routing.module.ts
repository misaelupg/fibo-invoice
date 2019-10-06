import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'add/:id', component: AddProjectComponent },
    { path: 'add', component: AddProjectComponent },
    { path: 'list', component: ProjectListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectRoutingModule { }
