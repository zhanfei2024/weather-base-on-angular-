import { Component,ViewChild } from '@angular/core';
import { NavController,Content, NavParams } from 'ionic-angular';
import { WeatherDetailPage } from '../weather-detail/weather-detail';

import { Data } from '../../providers/data.service';

@Component({
  selector: 'page-current-weather',
  templateUrl: 'current-weather.html'
})

export class CurrentWeatherPage {
  weatherInfo:any;
  dataFinish: boolean = false;
  hasErr: any;
  city:string;
  constructor(public navCtrl: NavController, public data: Data, public navParams:NavParams) {
    this.city = this.navParams.get('name');
  }

  ionViewDidLoad() {
    this.initData();
  }
  initData() {
    this.hasErr = null;
    this.dataFinish = false;
    this.data.getWeatherDetail(this.city).then(res => {
      this.weatherInfo = res;
      this.dataFinish = true;
    }, err => {
      this.hasErr = err;
    })
  }
}
