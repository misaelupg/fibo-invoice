import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Activity {
  projectName: string;
  hours: number;
  date: Date;
  memberName: string;
  description: string;
}

const ACTIVITY_DATA: Activity[] = [
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
  {
    projectName: 'General de Baleros',
    hours: 3,
    date: new Date(),
    memberName: 'Misael Cázares',
    description: 'Testing'
  },
];


@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'hours', 'date', 'memberName', 'description'];
  dataSource = ACTIVITY_DATA;
  constructor() { }

  ngOnInit() {
  }

}
