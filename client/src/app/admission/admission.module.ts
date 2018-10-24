import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdmissionComponent } from './add-admission.component';
import { AdmissionComponent } from './admission.component';
import { AdmissionRoutingModule } from '@app/admission/admission-routing.module';
import { AdmissionService } from '@app/admission/admission.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

@NgModule({
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
  
  ],
  declarations: [AdmissionComponent,AddAdmissionComponent ],
  providers : [AdmissionService]
})
export class AdmissionModule { }
