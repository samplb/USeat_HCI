import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndePage } from './ende';

@NgModule({
  declarations: [
    EndePage,
  ],
  imports: [
    IonicPageModule.forChild(EndePage),
  ],
  exports: [
    EndePage
  ]
})
export class EndePageModule {}
