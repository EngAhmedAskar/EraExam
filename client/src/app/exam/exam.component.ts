import { Component, OnInit, OnDestroy } from "@angular/core";
import { finalize } from "rxjs/operators";
import { ExamService } from "@app/core/exam/exam.service";
import { ActivatedRoute, Params } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-exam",
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit, OnDestroy {
  error: String;
  opened: Boolean;
  timeProceed = 0;
  reminingTime: Number;
  config: any;
  exam: Object;
  editorOptions: any = { maxLines: 1000, printMargin: false };
  text: String = 'import x';
  private isLoading: boolean;

  constructor(private examService: ExamService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.snackBar.open('Exam Started', null, { duration: 5000 });
    this.config = { leftTime: 60 * 60 * 2 };
  }

  async ngOnInit() {
    this.opened = true;
    this.isLoading = true;
    this.activatedRoute.queryParams.subscribe((querys: Params) => {
      this.examService
        .getByToken({ token: querys.token })
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((e: Object) => {
          this.exam = e;
        });
    });
    window.onblur = this.onLoseFocus;
  }
  async ngOnDestroy() {
    throw new Error('Method not implemented.');
  }
  onFinished() {
    if (this.timeProceed > 120) {
      this.onSubmit();
    }
  }
  onStart() {
    // this.snackBar.open('Exam Started', null, {duration: 5000});
  }

  onLoseFocus = () => {
    this.snackBar.open('Your Exam was suspended', null, { duration: 5000 });
  }

  async onSubmit() {
    try {
    } catch (err) {
      this.error = 'Exam is Suspended please contact the admission!';
    }
  }
}
