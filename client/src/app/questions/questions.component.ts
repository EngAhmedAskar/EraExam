import { Component, OnInit, Input } from '@angular/core';
import { EraServiceService } from '@app/era-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
   public questions: Array<object> ;
   private   mykey: String;

   constructor(private EraServiceService :EraServiceService) {

   EraServiceService.getQuestions().subscribe(data=>this.questions= JSON.parse(data));
    console.log(this.mykey);
      EraServiceService.getQuestions().forEach(element => {
        console.log(element);
     });

  }
  ngOnInit() {
  }

}
