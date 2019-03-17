import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  perct: number;
  @ViewChild('range') range: IonRange;

  constructor() { }

  ngOnInit() {
    this.perct = Number(this.range.value) / 100;
  }

  change(event: CustomEvent) {
    this.perct = event.detail.value / 100;
  }

}
