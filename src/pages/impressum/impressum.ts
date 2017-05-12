import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Impressum page.
 *
 * Generelle Infos zum Projekt und dem Team.
 */
@IonicPage()
@Component({
  selector: 'page-impressum',
  templateUrl: 'impressum.html',
})
export class Impressum {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Impressum');
  }

}
