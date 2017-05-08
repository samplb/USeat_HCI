import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the Reservierung page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reservierung',
  templateUrl: 'reservierung.html',
})
export class Reservierung {
    name:string;
    val:number;
    
    /**
     * Im Construcor werden die benötigten EIngaben ausgelesen und anschließend ein passender Sitz gefunden. 
     * Bei dem Storage, den ich derzeit nutze gibt es nur key, value paare, daher würd sich JSON anbieten
     * unten beispielJSON Syntax, meine Idee wäre halt das Format, wer eine bessere Idee hat bitte sagen.
     * --------------------------------------------------
     * {
     * "free_timeslots":{
     *      "0700":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *      "0730":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *          ...
     *      }
     * "reserved_timeslots":{
     *      "0700":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *      "0730":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *          ...
     *      }
     * "used_timeslots":{
     *      "0700":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *      "0730":{
     *          "name":["og1_22", "og1_23", "og1_24", ...]
     *          }
     *          ...
     *      }
     * }
     * --------------------------------------------------
     *  
     *  oder wir speichern jeden Sitz als objekt mit den Infos zu den freien Timeslots als Array.
     *  
     */
  constructor(public storage: Storage,
                public navCtrl: NavController, 
                public navParams: NavParams) {
                
      console.log('enter constructor');
      //this.val=0;
     // if(this.val==0) {
          storage.ready().then(() => {
          console.log('storageReady');
          storage.get('og1_22').then((val) => {
            this.val=parseInt(val);
              console.log('Value= ',this.val);
          
          if (this.val==0){
              storage.set('og1_22',1);
              console.log('set1');
             
          } else if (this.val==1){
              console.log('set7');
              storage.set('og1_22',7);
          } else if (this.val < 0 || this.val>2){
              console.exception('Error, unknown value');
          }});
      })
    //gets storage ready:https://ionicframework.com/docs/storage/
    //  } 
  }

  ionViewDidLoad() {
      
    console.log('ionViewDidLoad Reservierung');
  }

}
