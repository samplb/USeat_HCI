import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  username = '';
  matnr = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['username'];
    this.matnr = info['matnr'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
   ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }
  ionViewDidExit() {
      console.log('Welcome exit');
  }
}
