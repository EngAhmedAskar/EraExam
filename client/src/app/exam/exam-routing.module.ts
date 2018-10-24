import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { extract } from '@app/core';
import { ExamComponent } from './exam.component';
import { Shell } from '@app/shell/shell.service';
import { SuspendedComponent } from './suspended.component';
import { CompatibilityComponent } from './compatibility.component';
import { ThankyouComponent } from './thankyou.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'exam', component: ExamComponent, data: { title: extract('exam') } },
    { path: 'suspended', component: SuspendedComponent },
    { path: 'compatibility', component: CompatibilityComponent },
    { path: 'thankyou', component: ThankyouComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamRouteModule { }
