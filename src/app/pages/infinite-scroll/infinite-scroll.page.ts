import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    setTimeout(() => {
      if (this.data.length >= 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const push = Array(20);
      this.data.push(...push);
      event.target.complete();
    }, 1000);
  }

}
