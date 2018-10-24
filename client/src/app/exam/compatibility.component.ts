import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compatibility',
  template: `
    <p>
      You must use Desktop CHROME browser
    </p>
  `,
  styles: []
})
export class CompatibilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
