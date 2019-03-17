import { Component, OnInit } from '@angular/core';
import { PokedexDataService } from './services/pokedex-data.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  pokedex: any[] = [];
  value = '';
  loading: any;

  constructor(private pokedexService: PokedexDataService,
              public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Loading...');
    setTimeout(() => {
      this.getPokedex();
    }, 1000);
  }

  search(event) {
    this.value = event.detail.value;
  }

  getPokedex() {
    this.pokedexService.getPokedex()
      .subscribe((res: any) => {
        this.pokedex = res.pokemon;
        this.loading.dismiss();
      });
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({message});
    return this.loading.present();
  }

}
