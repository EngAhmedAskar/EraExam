import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'invitation', loadChildren: 'app/invitation/invitation.module#InvitationModule' },
<<<<<<< HEAD
    
{ path: '', loadChildren: 'app/questions/questions.module#QuestionsModule' },
{ path: '', loadChildren: 'app/admission/admission.module#AdmissionModule' }

=======
    { path: '', loadChildren: 'app/questions/questions.module#QuestionsModule' }
>>>>>>> b9f5cbcf0df4aa5863fe886dee6c24d131169718
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
