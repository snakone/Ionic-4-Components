import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;
  @ViewChild('list') list: IonList;

  constructor(private data: UsersDataService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.data.getUsers();
  }

  favorite(user) {
    this.presentToast('Guardó en favoritos');
    this.list.closeSlidingItems();
  }

  share(user) {
    this.presentToast('Compartido');
    this.list.closeSlidingItems();
  }

  delete(user) {
    this.presentToast('Borrado');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
