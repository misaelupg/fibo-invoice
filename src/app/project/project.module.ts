import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
