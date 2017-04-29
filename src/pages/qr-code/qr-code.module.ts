import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCode } from './qr-code';

@NgModule({
  declarations: [
    QrCode,
  ],
  imports: [
    IonicPageModule.forChild(QrCode),
  ],
  exports: [
    QrCode
  ]
})
export class QrCodeModule {}
