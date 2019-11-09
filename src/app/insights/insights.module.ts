import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from './insights.component';
import {InsightsRoutingModule} from './insights-routing.module';



@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule,
  ]
})
export class InsightsModule { }
