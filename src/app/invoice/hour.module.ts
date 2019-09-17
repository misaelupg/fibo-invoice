import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHoursComponent } from './add-hours/add-hours.component';
import { HourRoutingModule } from './hour-routing.module';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [AddHoursComponent],
  imports: [
    CommonModule,
    HourRoutingModule,
    CalendarModule,
  ]
})
export class HourModule { }
