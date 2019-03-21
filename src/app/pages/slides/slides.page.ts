import { Component, OnInit } from '@angular/core';
import { SLIDES } from './slide.data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides = SLIDES;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/');
  }

}
