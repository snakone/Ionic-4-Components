import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchBarPage } from './search-bar.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PokedexDataService } from './services/pokedex-data.service';

const routes: Routes = [
  {
    path: '',
    component: SearchBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchBarPage],
  providers: [PokedexDataService]
})
export class SearchBarPageModule {}
