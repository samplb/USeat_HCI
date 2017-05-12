import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EndePage page.
 *
 * Wird bei erfolgreicher Reservierung angezeigt.
 */
@IonicPage()
@Component({
  selector: 'page-ende',
  templateUrl: 'ende.html',
})
export class EndePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndePage');
  }
  openMenu() {
    this.navCtrl.push('Menu');
  }
}
