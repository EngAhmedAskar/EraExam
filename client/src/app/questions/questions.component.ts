import { Component, OnInit, Input } from '@angular/core';
import { EraServiceService } from '@app/era-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
   private questions : Array<object>  ;
   
   
  constructor(private EraServiceService :EraServiceService) { 

   EraServiceService.getQuestions().subscribe(data=>this.questions= JSON.parse(data));
    

  }
  ngOnInit() {
  }
  updateQ(e : any){
  if (e.is_active=true) {
    e.is_active=false;
  }else{
    e.is_active=true;
  }
     this.EraServiceService.updateQuestion(e,e._id).subscribe();
   
  }
}
