import { Component, OnInit, Input } from '@angular/core';
import { EraServiceService } from '@app/era-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
   private questions : object[]  ;
   
   private   mykey :String[]
  constructor(private EraServiceService :EraServiceService) { 
    this.questions =Array.of( EraServiceService.getQuestions());
     

  }
  ngOnInit() {
  }

}
