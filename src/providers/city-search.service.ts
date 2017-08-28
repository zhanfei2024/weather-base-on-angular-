import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import { City }           from './city';

@Injectable()
export class CitySearchService {
    constructor(private http: Http) {}
    search(term:string):Observable<City[]> {
        return this.http
                    .get(`app/cities/?name=${term}`)
                    .map((r:Response)=> r.json().data as City[]);
    }

}