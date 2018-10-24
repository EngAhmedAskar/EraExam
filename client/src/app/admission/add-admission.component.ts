import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdmissionService } from '@app/admission/admission.service';

@Component({
  selector: 'app-add-admission',
  templateUrl: './add-admission.component.html',
  styleUrls: ['./add-admission.component.scss']
})
export class AddAdmissionComponent implements OnInit {
  private admission: object;
  myForm: FormGroup;
  constructor(private AdmissionService: AdmissionService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      email: [
        [],
        [Validators.required, Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        )]
      ], password: [
        [],
        [Validators.required]
      ],
      name: [
        [],
        [Validators.required]

      ]

    }
    );
  }
  onSubmit() {
    this.admission = {
      email: this.myForm.controls['email'].value,
      password: this.myForm.controls['password'].value,
      name: this.myForm.controls['name'].value,
      is_activate: true,
      role : 'admission'
    };
    console.log(this.admission)
    this.AdmissionService.addAdmission(this.admission).subscribe(res => console.log(res));

  }
  ngOnInit() {
  }


}
