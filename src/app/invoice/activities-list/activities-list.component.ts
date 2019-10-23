import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectService} from '../../project/project.service';
import {ActivityService} from '../activity.service';

export interface Activity {
  project: string;
  hours: number;
  description: string;
}

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit {

  displayedColumns: string[] = ['hours', 'description', 'project'];
  projects: Array<IProject>;
  selectedProjectId = 0;
  dataSource: Activity[];
  selectedMonth = 0;

  readonly MONTHS = [
    {
      number: 1,
      description: 'Enero',
    },
    {
      number: 2,
      description: 'Febrero',
    },
    {
      number: 3,
      description: 'Marzo',
    },
    {
      number: 4,
      description: 'Abril',
    },
    {
      number: 5,
      description: 'Mayo',
    },
    {
      number: 6,
      description: 'Junio',
    },
    {
      number: 7,
      description: 'Julio',
    },
    {
      number: 8,
      description: 'Agosto',
    },
    {
      number: 9,
      description: 'Septiembre',
    },
    {
      number: 10,
      description: 'Octubre',
    },
    {
      number: 11,
      description: 'Noviembre',
    },
    {
      number: 12,
      description: 'Diciembre',
    },
  ];

  constructor(
    private projectService: ProjectService,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.selectedMonth = new Date().getMonth() + 1;
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.GetAllProjects()
      .then((response) => {
        this.projects = response;
        this.selectedProjectId = this.projects[0].id;
        this.getActivitiesByProject(this.selectedProjectId, this.selectedMonth);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  getActivitiesByProject(projectId: number, selectedMonth: number) {
    this.activityService.GetActivityByProject(projectId, selectedMonth)
      .then(response => {
        this.dataSource = response;
      })
      .catch(error => {
        console.log('Error', error);
      });
  }

}
