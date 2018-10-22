import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-invitation",
  templateUrl: "./invitation.component.html",
  styleUrls: ["./invitation.component.scss"]
})
export class InvitationComponent implements OnInit {
  myForm: FormGroup;

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

    this.myForm.valueChanges.subscribe((data: any) => console.log(data));
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.myForm);
  }
}
