import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHoursComponent } from './add-hours/add-hours.component';
import { HourRoutingModule } from './hour-routing.module';



@NgModule({
  declarations: [AddHoursComponent],
  imports: [
    CommonModule,
    HourRoutingModule
  ]
})
export class HourModule { }
