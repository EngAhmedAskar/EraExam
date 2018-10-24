import { Component, OnInit, OnDestroy } from "@angular/core";
import { finalize } from "rxjs/operators";
import { ExamService } from "@app/core/exam/exam.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"]
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

  constructor(
    private examService: ExamService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {
    this.snackBar.open('Exam Started', null, { duration: 5000 });
    this.config = { leftTime: 60 * 60 * 2 };
    this.checkCompatibility();
  }
  checkCompatibility() {
    const deviceInfo = this.deviceService.getDeviceInfo();
    const isDesktop = this.deviceService.isDesktop();
    if (!(deviceInfo.browser === 'chrome' && isDesktop)) {
      this.router.navigateByUrl('/compatibility');
    }
  }

  async ngOnInit() {
    this.getExam();
    window.onblur = this.onLoseFocus;
  }

  async getExam() {
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
          console.log(this.exam);
          this.opened = true;
        });
    });
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

    this.router.navigateByUrl('/suspended');
    // Delete login information from localstoarge
  };

  onChange(answer: String, _questionId: String) {}

  async onSubmit() {
    try {
      await this.examService.submitExam(this.exam);
      this.router.navigateByUrl('/thankyou');
    } catch (err) {
      this.error = 'Exam is Suspended please contact the admission!';
    }
  }
}
