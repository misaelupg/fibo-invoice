import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesAddComponent } from './activities-add/activities-add.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule, MatListModule, MatSelectModule, MatSnackBarModule, MatSnackBarRef, MatTableModule} from '@angular/material';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ActivityService} from './activity.service';
import {MemberService} from '../member/member.service';


@NgModule({
  declarations: [ActivitiesAddComponent, ActivitiesListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    InvoiceRoutingModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    ActivityService,
    MemberService,
  ]
})
export class InvoiceModule { }
