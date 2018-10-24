import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  template: `
    <p>
      thankyou for submission the result will be sent by email!
    </p>
  `,
  styles: []
})
export class ThankyouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
