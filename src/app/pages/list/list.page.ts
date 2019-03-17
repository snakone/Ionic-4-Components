import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;
  @ViewChild('list') list: IonList;

  constructor(private data: UsersDataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.data.getUsers();
  }

  favorite(user) {
    console.log('favorite', user);
    this.list.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.list.closeSlidingItems();
  }

  delete(user) {
    console.log('delete', user);
  }

}
