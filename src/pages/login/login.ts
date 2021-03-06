import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
/**
 * Login Page. Startscreen
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    loading: Loading;
    registerCredentials ={ username: '', password: ''};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
  }
 //Login, prüft am Authservice-provider ob die Anmeldedaten authentisch sind. Wenn Ja wird man automatisch zum Menü weitergeletiet, ansonsten ERror.
    public login() {
        this.showLoading()
        this.auth.login(this.registerCredentials).subscribe(allowed => {
            if (allowed) {        
                this.nav.setRoot('Menu');
            } else {
                this.showError("Please use your USpace credentials");
            }
            },
            error => {
                this.showError(error);
            });
        }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'I\'m sorry',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  ionViewDidExit() {
      console.log('Login exit');
  }

}
