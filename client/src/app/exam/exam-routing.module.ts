import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { extract } from '@app/core';
import { ExamComponent } from './exam.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'exam', component: ExamComponent, data: { title: extract('exam') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamRouteModule { }
