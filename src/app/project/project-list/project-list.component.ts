import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { ProjectService } from './../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: IModelResponse[] = [];
  constructor(private projectService: ProjectService,  private router: Router) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.GetAllProjects()
      .then((response) => {
        this.projects = response;
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

}
