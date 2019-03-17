import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name: string;
  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

}
