import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { environment } from '@env/environment.prod';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'invitation', loadChildren: 'app/invitation/invitation.module#InvitationModule' },
    { path: '', loadChildren: 'app/questions/questions.module#QuestionsModule' },
    { path: '', loadChildren: 'app/admission/admission.module#AdmissionModule' }


  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production,
                                       preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
