
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
<<<<<<< HEAD
import { ExamReviewComponent } from './exam-review.component';
=======
import { SuspendedComponent } from './suspended.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { CompatibilityComponent } from './compatibility.component';
import { ThankyouComponent } from './thankyou.component';
>>>>>>> 3f3afdf4ce1ccbb468f95eed69c5cbb16afc187c


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
<<<<<<< HEAD
  declarations: [ExamComponent, ExamReviewComponent]
=======
  declarations: [ExamComponent, SuspendedComponent, CompatibilityComponent, ThankyouComponent]
>>>>>>> 3f3afdf4ce1ccbb468f95eed69c5cbb16afc187c
})
export class ExamModule { }
