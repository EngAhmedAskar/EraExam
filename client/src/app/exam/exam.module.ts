
import { ExamComponent } from './exam.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { ExamRouteModule } from './exam-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ExamRouteModule
  ],
  declarations: [ExamComponent]
})
export class ExamModule { }
