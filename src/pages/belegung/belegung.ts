import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the Belegung page.
 *
 * See https://www.joshmorony.com/adding-responsive-charts-graphs-to-ionic-2-applications/
 */
@IonicPage()
@Component({
  selector: 'page-belegung',
  templateUrl: 'belegung.html',
})
export class Belegung {
    @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart:any;
    free_slots:number;
    reserved_slots:number;
    used_slots:number;
    sumup:number;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }
  createChart(){
      this.free_slots=134;
      this.reserved_slots=45;
      this.used_slots=90;
      this.sumup = this.free_slots + this.reserved_slots + this.used_slots;
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Frei", "Reserviert", "Belegt"],
            datasets: [{
                label:'# Belegung',
                data: [this.free_slots, this.reserved_slots, this.used_slots],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                ],
                hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                ]
            }]
        }
    })
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad Belegung');
    this.createChart();
    
  }

}
