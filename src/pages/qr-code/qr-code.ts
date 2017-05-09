import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the QrCode page.
 *
 * See https://www.thepolyglotdeveloper.com/2016/02/add-barcode-scanning-functionality-to-your-ionic-2-app/
 */
@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCode {
    qrinfo:string;

  constructor(private scanner:BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
      this.qrinfo='Still empty';
  }
  
  scan() {
      this.scanner.scan().then((barcodeData) => {
          console.log(barcodeData.text);
          this.qrinfo=barcodeData.text;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCode');
  }

}
