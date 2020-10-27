import { HttpErrorResponse } from '@angular/common/http';
import { Currency } from './currency.model';
import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CurrencyService } from "./currency.service";
import { of } from 'rxjs';

describe('CurrencyService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let currencyService: CurrencyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });

    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    currencyService = new CurrencyService(httpClientSpy as any);
  })

  it('should create Currency Service', () => {
    expect(currencyService).toBeTruthy();
  });

  it('should return expected currencies (HttpClient called once)', () => {
    const expectedCurrencies: Currency[] =
      [new Currency()];

    httpClientSpy.get.and.returnValue(of(expectedCurrencies));

    currencyService.getCurrencies().subscribe(
      currencies => expect(currencies).toEqual(expectedCurrencies, 'expected currencies'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected currency id (HttpClient called once)', () => {
    const expectedCurrencyId: number = 123;
    const fakeCurrency: Currency = new Currency();

    httpClientSpy.get.and.returnValue(of(expectedCurrencyId));

    currencyService.addCurrency(fakeCurrency).subscribe(
      currencyId => expect(expectedCurrencyId).toEqual(expectedCurrencyId, 'expected currency Id'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  // it('should return an error when the server returns a 404', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404,
  //     statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   currencyService.getCurrencies().subscribe(
  //     currencies => fail('expected an error, not currencies'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });

});
