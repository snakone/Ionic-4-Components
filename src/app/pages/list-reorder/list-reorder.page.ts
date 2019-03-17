import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters = ['Aquaman', 'Superman', 'Spiderman', 'Flash', 'Mujer Maravilla'];

  constructor() { }

  ngOnInit() {
  }

  reOrder(event) {
    const item = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, item);
    event.detail.complete();
  }

  save(characters) {
    console.log(characters);
  }

}
