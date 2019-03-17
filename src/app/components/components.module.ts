import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PopOverComponent } from './pop-over/pop-over.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalComponent,
    PopOverComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ModalComponent,
    PopOverComponent
  ]
})
export class ComponentsModule { }
