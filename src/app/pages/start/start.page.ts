import { Component, OnInit } from '@angular/core';
import { COMPONENTS, Components } from './pages.data';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  components: Components[] = COMPONENTS;

  constructor() { }

  ngOnInit() {
  }

}
