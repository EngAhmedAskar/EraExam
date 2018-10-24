import { Component, OnInit } from '@angular/core';
import { EraServiceService } from '@app/era-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
private question :object;
myForm: FormGroup;
  constructor(private eraService : EraServiceService,private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      description: [
        [],
        [Validators.required]
      ]
    });
   }
   onSubmit() {
     this.question ={
      description : this.myForm.controls['description'].value,
      is_active : true
     };
     this.eraService.addQuestion(this.question).subscribe(res=> console.log(res));
  
  }
  ngOnInit() {
  }

}
