import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EraServiceService } from '@app/era-service.service';
import { QuestionsComponent } from '@app/questions/questions.component';
import { Routes } from '@angular/router';
import { AddQuestionsComponent } from '@app/questions/add-questions.component';
import { QuestionRoutingModule } from '@app/questions/question-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';





@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    QuestionRoutingModule
  ],
  declarations: [QuestionsComponent, AddQuestionsComponent],
  providers: [EraServiceService]
})
export class QuestionsModule { }
