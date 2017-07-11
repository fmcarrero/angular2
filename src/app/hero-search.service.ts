import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

@Injectable
export class HeroSearchService{

    constructor(private http:Http){}
    search(term :  string)
}