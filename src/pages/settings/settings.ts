import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Settings page.
 *
 * https://ionicframework.com/docs/components/#toggle
 * https://ionicframework.com/docs/components/#range
 * Einfache Settings-Page mit Beispieleinstellungen.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //siehe kommentar link.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
