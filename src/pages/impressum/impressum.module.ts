import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Impressum } from './impressum';

@NgModule({
  declarations: [
    Impressum,
  ],
  imports: [
    IonicPageModule.forChild(Impressum),
  ],
  exports: [
    Impressum
  ]
})
export class ImpressumModule {}
