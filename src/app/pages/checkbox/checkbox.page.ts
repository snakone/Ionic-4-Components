import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  data: Check[] = [
    {
      color: 'primary',
      selected: false
    },
    {
      color: 'secondary',
      selected: true
    },
    {
      color: 'tertiary',
      selected: false
    },
    {
      color: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check: Check) {
    console.log(check);
  }

}

interface Check {
  color: string;
  selected: boolean;
}
