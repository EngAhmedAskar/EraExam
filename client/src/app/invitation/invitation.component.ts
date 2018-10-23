import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '@app/core/student/student.service';
import { finalize } from 'rxjs/operators';
import { ExamService } from '@app/core/exam/exam.service';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  isLoading = false;
  myForm: FormGroup;
  statusResponde: any;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.myForm = formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ]
    });
  }
  ngOnInit() {}
  onSubmit() {

    this.isLoading = true;
    //  retrive status
    //  show error if
    //  clear forms
     this.studentService.sendInvitation( this.myForm.value.email )
      .pipe( finalize ( () => { console.log( 'response service' ); }))
      .subscribe( ( resp: Object ) => { this.statusResponde = resp; });
  }
}
