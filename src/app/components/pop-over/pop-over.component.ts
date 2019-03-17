import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  items = Array(20);

  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(index: number) {
    this.popCtrl.dismiss({
      value: index
    });
  }

}
