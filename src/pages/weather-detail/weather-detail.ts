import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CurrentWeatherPage } from '../current-wather/current-weather';
import { Data } from '../../providers/data.service';
import { City } from '../../providers/city';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'page-weather-detail',
  templateUrl: 'weather-detail.html'
})

export class WeatherDetailPage {
  id:number;
  cities:any;
  dataFinish: boolean = false;
  hasErr: any;

  constructor(public navCtrl: NavController, public data: Data, public navParams:NavParams) {

  }
  //跳转到当地天气详情页
  PushCurrentWeather(city) {
    this.navCtrl.push(CurrentWeatherPage, {name: city})
  }

  // 添加英雄
  add(name:string):void {
    name = name.trim();
    if(!name) {return;}
    this.data.create(name)
        .then(city => {
          this.cities.push(city);
        })
  }

  // 删除英雄
  delete(city:City):void {
    this.data
        .delete(city.id)
        .then(()=>{
          this.cities = this.cities.filter(c=> c! == city);
        })
  }




  ionViewDidLoad() {
    this.initData();
  }
  initData() {
    this.hasErr = null;
    this.dataFinish = true;
    this.data.getCities()
              .then(cities => this.cities = cities);
  }
}
