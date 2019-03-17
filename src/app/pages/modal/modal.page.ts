import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async open() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        name: 'Sergi',
        country: 'Spain'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log(data);
    }
  }
}
