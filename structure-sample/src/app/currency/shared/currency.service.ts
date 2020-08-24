import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Currency } from './currency.model';
import { environment } from '../../../environments/environment';

import { Test } from "./currency.model";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {

  }

  // getCurrencies(): Observable<Currency[]> {
  //   let getCurrenciesUrl = `${environment.api_url}/Currency/currencies`;
  //   return this.httpClient.get(getCurrenciesUrl);
  // }
  getCurrencies() {
    let getCurrenciesUrl = `${environment.api_url}/api/Currency/getCurrencies`;
    return this.http.get(getCurrenciesUrl).subscribe(data => console.log(data));
  }

  addCurrency() {
    let currency = new Currency();
    currency.code = 3
    currency.county = "Japan"

    this.http.post(`${environment.api_url}/api/Currency/addCurrency`, currency).subscribe();
  }


}
