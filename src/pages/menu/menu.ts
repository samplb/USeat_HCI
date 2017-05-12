import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Menu page.
 *
 * Zeigt Buttons mit den möglichen Auswahlchancen für die App. Jeder Button leitet automatisch zur entsprechenden App weiter.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
    selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
      
      this.selectedItem = navParams.get('item');
  }
  
      
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('Login');
      console.log('Menu Logout');
    });
  }
  openSettings() {
      this.navCtrl.push('Settings');
  }
  openAbout() {
      this.navCtrl.push('About');
  }
  openImpressum() {
      this.navCtrl.push('Impressum');
  }
  openReservierung() {
      this.navCtrl.push('Reservierung');
  }
  openBelegung() {
      this.navCtrl.push('Belegung');
  }
  openQrCode() {
      this.navCtrl.push('QrCode');
  }
  
  
  ionViewDidLoad() {
      console.log('ionViewDidLoad Menu');
  }
  ionViewDidExit() {
      console.log('Menu exit');
  }
  
}
