import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'Login';
  pages: Array<{title: string, component: any}>;

  constructor(storage: Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    //gets storage ready:https://ionicframework.com/docs/storage/
      storage.ready().then(() => {
          storage.set('og1_23',0);
          storage.set('og1_24',0);
          storage.set('og1_25',0);
          storage.set('og1_22',0);
          storage.set('og1_21',0);
          storage.set('og1_20',0);
          storage.set('og2_01',0);
          storage.set('og2_02',0);
          storage.set('og2_03',0);
          storage.set('og2_04',0);
          storage.set('og2_05',0);
          storage.set('og2_06',0);
          storage.set('og2_07',0);
          storage.set('og2_08',0);
          storage.set('og2_09',0);
          storage.set('og2_10',0);
          storage.set('og1_26',0);
          storage.set('og1_27',0);
          storage.set('og1_28',0);
          storage.set('og1_29',0);
          storage.set('og1_30',0);
      })

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Menü', component: 'Menu' },
      { title: 'QR-Code', component: 'QrCode' },
      { title: 'Settings', component: 'Settings' },
      { title: 'Impressum', component: 'Impressum' },
      { title: 'About', component: 'About' }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

 
}

