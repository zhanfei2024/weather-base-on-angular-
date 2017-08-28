import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import { City } from './city';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class Data {
    data:any;
    constructor(public http:Http) {}

    //获取城市列表数据
    private citiesUrl="app/cities"; //url to web api
    getCities():Promise<City[]> {
        return this.http.get(this.citiesUrl)
                        .toPromise()
                        .then(response => response.json().data as City[])
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //创建一个城市
    private headers = new Headers({'Content-Type': 'application/json'});
    create(name:string):Promise<City> {
        return this.http
            .post(this.citiesUrl, JSON.stringify({name:name}),{headers:this.headers})
            .toPromise()
            .then(res=> res.json().data)
            .catch(this.handleError)
    }
    // 删除一个城市
    delete(id:number): Promise<void> {
        const url = `${this.citiesUrl}/${id}`;
        return this.http.delete(url, {headers:this.headers})
                        .toPromise()
                        .then(()=>null)
                        .catch(this.handleError)
    }

    //获取天气数据
    // getWeatherDetail(city:string) {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('http://wthrcdn.etouch.cn/weather_mini?city='+ city)
    //                 .subscribe(res=> {
    //                     this.data = res.json();
    //                     resolve(this.data);
    //                 }, err=> {
    //                     reject(err);
    //                 });
    //     })
    // }

    getWeatherDetail(city:string):Promise<any> {
        return this.http.get('http://wthrcdn.etouch.cn/weather_mini?city='+ city)
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
    }



}



