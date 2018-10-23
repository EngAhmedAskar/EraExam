import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ExamService } from '@app/core/exam/exam.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  data: Object;
  private isLoading: boolean;

  constructor(private examService: ExamService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true ;
    this.activatedRoute.queryParams.subscribe( (querys: Params) => {
      this.examService.getByToken({token: querys.token })
      .pipe( finalize( () => { this.isLoading = false; }))
      .subscribe( ( e: Object ) => { this.data = e; });
    });
  }
}
