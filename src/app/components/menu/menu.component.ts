import { Component, OnInit } from '@angular/core';
import { COMPONENTS, Components } from 'src/app/pages/start/pages.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: Components[] = COMPONENTS;

  constructor() { }

  ngOnInit() {}

}
