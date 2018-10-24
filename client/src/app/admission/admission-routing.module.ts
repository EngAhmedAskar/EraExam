import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from '@app/admission/admission.component';
import { AddAdmissionComponent } from '@app/admission/add-admission.component';
import { extract } from '@app/core';

const Admission_ROUTER: Routes = [
  {
    path: "admissions",
    component: AdmissionComponent,
    data: { title: extract('admissions') }
    // children: [
    //   {
       
    //     path: "game/:id",
    //     component: GameDetailsComponent,
    //     canActivate: [GrdGuard]
    //   }
    // ],
    
  },
  {
    path: "addadmission",
    component : AddAdmissionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(Admission_ROUTER)],
  exports: [RouterModule],
  providers: []
})
export class AdmissionRoutingModule { }
