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
import {MatIconModule, MatListModule, MatSelectModule, MatTableModule} from '@angular/material';
import {ActivitiesListComponent} from './activities-list/activities-list.component';


@NgModule({
  declarations: [ActivitiesAddComponent, ActivitiesListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    InvoiceRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class InvoiceModule { }
