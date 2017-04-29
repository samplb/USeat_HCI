import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Belegung } from './belegung';

@NgModule({
  declarations: [
    Belegung,
  ],
  imports: [
    IonicPageModule.forChild(Belegung),
  ],
  exports: [
    Belegung
  ]
})
export class BelegungModule {}
