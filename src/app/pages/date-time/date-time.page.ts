import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  date: Date = new Date();
  customDate;
  pickOpts;

  constructor() { }

  ngOnInit() {
    this.pickOpts = {
      buttons: [{
        text: 'Save',
        handler: (event) => console.log('Clicked Save!', event)
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  change(event: CustomEvent) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
