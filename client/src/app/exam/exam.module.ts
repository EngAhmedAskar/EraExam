
import { ExamComponent } from './exam.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountdownModule } from 'ngx-countdown';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { ExamRouteModule } from './exam-routing.module';
import { AceEditorModule } from 'ng2-ace-editor';
import { SuspendedComponent } from './suspended.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { CompatibilityComponent } from './compatibility.component';
import { ThankyouComponent } from './thankyou.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ExamRouteModule,
    CountdownModule,
    AceEditorModule,
    DeviceDetectorModule.forRoot()
  ],
  declarations: [ExamComponent, SuspendedComponent, CompatibilityComponent, ThankyouComponent]
})
export class ExamModule { }
