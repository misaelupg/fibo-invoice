import { Component, OnInit } from '@angular/core';
import {Activity} from '../models/activity.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../project/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityService} from '../activity.service';
import {MemberService} from '../../member/member.service';
import {Member} from '../../member/member.model';
import * as moment from 'moment';
import {MAT_DATE_FORMATS} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-activities-add',
  templateUrl: './activities-add.component.html',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ActivitiesAddComponent implements OnInit {

  activity: Activity;
  activityForm: FormGroup;
  status = 'new';
  members: Array<Member>;
  projects: Array<IProject>;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private memberService: MemberService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activityForm = this.fb.group({
      dateMoment: moment(),
      projectId: -1,
      date: moment().format('DD/MM/YYYY'),
      memberId: '',
      hours: 0,
      description: ['']
    });

    this.getAllMembers();
    this.getAllProjects();
    const id = this.route.snapshot.paramMap.get('id');
  }

  getAllMembers() {
    this.memberService.GetAllMembers()
      .then((response) => {
        this.members = response;
      })
      .catch((error) => {
        console.log('Error', error);
      });
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

  onSubmit() {
    const newActivity: Activity = this.activityForm.value;
    newActivity.date =  newActivity.dateMoment.format('DD/MM/YYYY').replace(/\\|\//g, '');

    this.activityService.AddActivity(newActivity)
        .then(() => {
          this.router.navigate(['/invoice/list']).then(result => this.openSnackBar('Saved correctly', 'Dismiss'));
        })
        .catch((error) => {
          this.openSnackBar(error.message, '');
        });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
