import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { HeroService } from './services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segment') segment: IonSegment;
  heroes: Observable<any>;
  publisher = '';

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.heroes = this.heroService.getHeroes();
  }

  segmentChanged(event) {
    const value = event.detail.value;
    if (value === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = value;
  }

}
