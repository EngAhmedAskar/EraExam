import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from '@app/questions/questions.component';
import { AddQuestionsComponent } from '@app/questions/add-questions.component';
import { extract } from '@app/core';



const QUESTION_ROUTER: Routes = [
  {
    path: "questions",
    component: QuestionsComponent,
    data: { title: extract('questions') }
    // children: [
    //   {
       
    //     path: "game/:id",
    //     component: GameDetailsComponent,
    //     canActivate: [GrdGuard]
    //   }
    // ],
    
  },
  {
    path: "addquestion",
    component : AddQuestionsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(QUESTION_ROUTER)],
  exports: [RouterModule],
  providers: []
})
export class QuestionRoutingModule { }
