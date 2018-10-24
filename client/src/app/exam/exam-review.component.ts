import { Component, OnInit } from '@angular/core';
import { ExamService } from '@app/core/exam/exam.service';

@Component({
  selector: 'app-exam-review',
  templateUrl: './exam-review.component.html',
  styleUrls: ['./exam-review.component.scss']
})
export class ExamReviewComponent implements OnInit {
  private exams : Array<object>  ;
  constructor(private examService: ExamService) {
    examService.getExams().subscribe((data:string)=>this.exams= JSON.parse(data));
   }

  ngOnInit() {
  }

}
