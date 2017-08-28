import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../providers/in-memory-data.service';

import { MyApp } from './app.component';
import { CitySearchComponent } from '../pages/city-search/city-search';
import { CurrentWeatherPage } from '../pages/current-wather/current-weather';
import { WeatherDetailPage } from '../pages/weather-detail/weather-detail';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import './rxjs-extensions';
import { Data } from '../providers/data.service';

@NgModule({
  declarations: [
    MyApp,
    CitySearchComponent,
    CurrentWeatherPage,
    WeatherDetailPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CitySearchComponent,
    CurrentWeatherPage,
    WeatherDetailPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data]
})
export class AppModule {}
