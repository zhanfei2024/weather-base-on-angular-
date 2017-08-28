import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CitySearchService } from '../../providers/city-search.service';
import { City }              from '../../providers/city';

@Component({
  selector: 'city-search',
  templateUrl: 'city-search.html',
  providers: [CitySearchService]
})
export class CitySearchComponent implements OnInit {
  cities: Observable<City[]>;
  private searchTerms = new Subject<string>();

  constructor(private citySearchService: CitySearchService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cities = this.searchTerms
                    .debounceTime(300)        // wait for 300ms pause in events
                    .distinctUntilChanged()   // ignore if next search term is same as previous
                    .switchMap(term => term   // switch to new observable each time
                        // return the http search observable
                        ? this.citySearchService.search(term)
                        // or the observable of empty heroes if no search term
                        : Observable.of<City[]>([]))
                    .catch(error => {
                        // TODO: real error handling
                        console.log(error);
                        return Observable.of<City[]>([]);
                    });
  }
}
