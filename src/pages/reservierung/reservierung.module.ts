import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reservierung } from './reservierung';

@NgModule({
  declarations: [
    Reservierung,
  ],
  imports: [
    IonicPageModule.forChild(Reservierung),
  ],
  exports: [
    Reservierung
  ]
})
export class ReservierungModule {}
