import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController,ToastController } from 'ionic-angular';


/**
 * Generated class for the QrCode page.
 *
 * See https://www.thepolyglotdeveloper.com/2016/02/add-barcode-scanning-functionality-to-your-ionic-2-app/
 * 
 */
@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
  
})
export class QrCode {
    qrinfo:string;
    qrActivated:boolean;
    resDate:Date;
    checkDate:Date;
    
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
      this.resDate = new Date();
      var h = this.resDate.getHours();
      this.resDate.setHours(h+1);
      console.log(this.resDate.toString());
  }
  //Bestätigungsbutton.  jede Stunde eine bestätigung, ansonsten nicht mehr reserviert. Nach jeder Bestätigung wird der Timer wieder auf 0 gesetzt.
  confirm() {
      if (this.resDate==null){
          let resDateCheck = this.al.create({
              title: 'Hinweis',
              subTitle: 'Noch keine Reservierung gewählt',
              buttons: ['Ok']
              
          });
      resDateCheck.present();
      return;
      }
      this.checkDate = new Date();
      this.timer();
  }
  //Prüft wie viel Zeit noch bis zum Ablauf der Reservierung ist. WEnn Zeit abgelaufen, würde die Reservierung automatisch gelöscht werden. HIER: einfacher Alert.
  timer(){
      var diff = this.resDate.getTime() - this.checkDate.getTime();
      console.log('Diff:'+diff/60000);
      var x=diff/60000;
      if(diff<=0){
          let warning = this.al.create({
              title: 'Achtung',
              subTitle: 'Reservierung abgelaufen!',
              buttons: ['OK']
          });
      warning.present();
      } else {
          let checkRes=this.al.create({
          title: 'Bestätigung',
          message: 'Reservierung verlängern? Noch ' + x.toFixed(0)+' minutes',
          buttons: [{
              text: 'Yes',
              handler: () => {
                    let toast = this.toast.create({
                        message: 'Reservierung verlängert',
                        duration: 5000,
                    })
                    toast.present(toast);
              }
          },
          {
              text: 'No',
              handler: () => {
                  let toast = this.toast.create({
                        message: 'Verlängerung abgebrochen',
                        duration: 5000
                    });
                    toast.present(toast);
              }
          }]
      });
      this.resDate=new Date();
      checkRes.present();
      }
  }
  //ruft den Barcodescanner auf und speichert den Text. der einfachheit halber wird der Text dennoch mit Beispieltext überschrieben. TestQR code im Projektordner.
  scan() {
      this.qrinfo='hier wäre der BarcodeText';
      this.scanner.scan().then((barcodeData) => {
          console.log(barcodeData.text);
          this.qrinfo=barcodeData.text;
      })
      this.qrActivated=true;
      this.alert();
      
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCode');
  }

}
