import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {

  projects: IProject[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.GetAllProjects()
      .then((response) => {
        console.log(response);
        this.projects = response;
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

}
