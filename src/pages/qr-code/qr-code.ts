import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController,ToastController } from 'ionic-angular';


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
    qrActivated:boolean;

  constructor(private toast:ToastController, private al:AlertController, private scanner:BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
      this.qrinfo='Still empty';
      this.qrActivated=false;
  }
  //Infos Einlesen hat nicht funktioniert.
  alert() {
      if (this.qrinfo=='Still empty'){
          let alert = this.al.create({
              title: 'Warnung',
              subTitle: 'Die Sitzplatzinfos wurden nicht eingelesen! Bitte versuchen Sie es erneut.',
              buttons: ['Bestätigen']
          });
      alert.present();
      }
  }
  //würde prüfen, ob der Tisch noch frei ist.
  resCheck() {
      let resCheck = this.al.create({
              title: 'Hinweis',
              subTitle: 'Hier würde geprüft werden, ob der Platz noch frei ist, ansonsten würde eine Warnung ausgegeben werden.',
              buttons: ['Ok']
          });
      resCheck.present();
  }
  //Reservierungsbutton, prüft ob Reservierung möglich und würde aktualisierung in DB schreiben.
  reserve() {
      if (this.qrActivated){
          
      let reserve=this.al.create({
          title: 'Reservierung',
          message: 'Wollen Sie diesen Platz wirklich reservieren?',
          buttons: [{
              text: 'Yes',
              handler: () => {
                    let toast = this.toast.create({
                        message: 'Reservierung erfolgreich',
                        duration: 5000,
                    })
                    this.resCheck();
                    toast.present(toast);
              }
          },
          {
              text: 'No',
              handler: () => {
                  let toast = this.toast.create({
                        message: 'Reservierung abgebrochen',
                        duration: 5000
                    });
                    toast.present(toast);
              }
          }]
      });
      reserve.present();
  } else {
      let warning = this.al.create({
              title: 'Warnung',
              subTitle: 'Erst die Tischinfos einlesen!',
              buttons: ['OK']
          });
      warning.present();
  }
  }
  //Bestätigungsbutton. mind. jede Stunde eine bestätigung, ansonsten nicht mehr reserviert. Ideal wäre mit Timer, sodass man weiß wie lange man noch ohne bestätigen sitzen kann.
  //timer gibt es im ionic-framework
  confirm() {
      
  }
  
  scan() {
      this.scanner.scan().then((barcodeData) => {
          console.log(barcodeData.text);
          this.qrinfo=barcodeData.text;
      })
      this.qrActivated=true;
      this.qrinfo='og1_22';
      this.alert();
      
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCode');
  }

}
