import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Currency } from './currency.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = `${environment.api_url}/api/Currency`;
  constructor(private http: HttpClient) {

  }

  getCurrencies(): Observable<Currency[]> {
    let getCurrenciesUrl = `${this.url}/getCurrencies`;
    return this.http.get<Currency[]>(getCurrenciesUrl);
  }

  addCurrency(currency: Currency) : Observable<number> {
    return this.http.post<number>(`${this.url}/addCurrency`, currency);
  }

  updateCurrency(currency: Currency) : Observable<Currency> {
    return this.http.put<Currency>(`${this.url}/updateCurrency`, currency);
  }

  getCurrency(id: number): Observable<Currency> {
    return this.http.get<Currency>(`${this.url}/getCurrency/${id}`);
  }

  deleteCurrency(id: number) {
    return this.http.delete(`${this.url}/deleteCurrency/${id}`);
  }


}
