import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the Belegung page.
 * Page mit Tabs. Zeigt mit Hilfe eines Doughnutcharts die Belegungen Gesamt und die verschiedenen Stockwerke an.
 */
@IonicPage()
@Component({
  selector: 'page-belegung',
  templateUrl: 'belegung.html',
})
export class Belegung {
    showSkip=true;
    @ViewChild('doughnutCanvas_Og1') doughnutCanvas_Og1;
    @ViewChild('doughnutCanvas_Og2') doughnutCanvas_Og2;
    @ViewChild('doughnutCanvas_Ges') doughnutCanvas_Ges;
    @ViewChild('doughnutCanvas_Bib') doughnutCanvas_Bib;
    @ViewChild('slides') slides:Slides;
    doughnutChart_Og1:any;
    doughnutChart_Bib:any;
    doughnutChart_Og2:any;
    doughnutChart_Ges:any;
    //Daten Gesamt
    free_slots_Ges:number;
    reserved_slots_Ges:number;
    used_slots_Ges:number;
    sumup_Ges:number;
    //Daten OG1
    free_slots_Og1:number;
    reserved_slots_Og1:number;
    used_slots_Og1:number;
    sumup_Og1:number;
    //Daten OG2
    free_slots_Og2:number;
    reserved_slots_Og2:number;
    used_slots_Og2:number;
    sumup_Og2:number;
    //Daten Bibliothek
    free_slots_Bib:number;
    reserved_slots_Bib:number;
    used_slots_Bib:number;
    sumup_Bib:number;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }
  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }
  ionViewWillEnter() {
		this.slides.update();
	}
        //erzeugt die Charts mit Hardgecodeten Daten. ANsonsten wäre es eine einfache sql abfrage.
  createChart(){
      this.free_slots_Ges=200;
        this.reserved_slots_Ges=50;
        this.used_slots_Ges=50;
        this.sumup_Ges = this.free_slots_Ges + this.reserved_slots_Ges + this.used_slots_Ges;
        
        
      this.free_slots_Og1=60;
        this.reserved_slots_Og1=10;
        this.used_slots_Og1=30;
        this.sumup_Og1 = this.free_slots_Og1 + this.reserved_slots_Og1 + this.used_slots_Og1;
        
        
      this.free_slots_Bib=90;
        this.reserved_slots_Bib=3;
        this.used_slots_Bib=7;
        this.sumup_Bib = this.free_slots_Bib + this.reserved_slots_Bib + this.used_slots_Bib;
        
        
      this.free_slots_Og2=3;
        this.reserved_slots_Og2=64;
        this.used_slots_Og2=33;
        this.sumup_Og2 = this.free_slots_Og2 + this.reserved_slots_Og2 + this.used_slots_Og2;
      this.doughnutChart_Ges = new Chart(this.doughnutCanvas_Ges.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Frei", "Reserviert", "Belegt"],
            datasets: [{
                label:'# Belegung',
                data: [this.free_slots_Ges, this.reserved_slots_Ges, this.used_slots_Ges],
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
    // CHart OG1
    this.doughnutChart_Og1 = new Chart(this.doughnutCanvas_Og1.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Frei", "Reserviert", "Belegt"],
            datasets: [{
                label:'# Belegung',
                data: [this.free_slots_Og1, this.reserved_slots_Og1, this.used_slots_Og1],
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
    //Chart OG2
    this.doughnutChart_Og2 = new Chart(this.doughnutCanvas_Og2.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Frei", "Reserviert", "Belegt"],
            datasets: [{
                label:'# Belegung',
                data: [this.free_slots_Og2, this.reserved_slots_Og2, this.used_slots_Og2],
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
    //Chart Bibliothek
    this.doughnutChart_Bib = new Chart(this.doughnutCanvas_Bib.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ["Frei", "Reserviert", "Belegt"],
            datasets: [{
                label:'# Belegung',
                data: [this.free_slots_Bib, this.reserved_slots_Bib, this.used_slots_Bib],
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
  backToMenu() {
      this.navCtrl.push('Menu');
  }

}
