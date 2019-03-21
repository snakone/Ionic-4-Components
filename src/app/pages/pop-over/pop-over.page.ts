import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/components/pop-over/pop-over.component';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopOver(event: any) {
    const popover = await this.popCtrl.create({
      component: PopOverComponent,
      event,
      translucent: false,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data) {
      console.log(data);
    }
  }

}
