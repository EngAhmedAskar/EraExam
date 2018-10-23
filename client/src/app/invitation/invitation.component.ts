import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-invitation",
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.scss"]
})
export class InvitationComponent {
  myForm: FormGroup;
  ngOnInit() {}
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          )
        ]
      ]
    });
    // To logger the value not important now
    // this.myForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }
  onSubmit() {
    console.log(this.myForm);
  }
}
