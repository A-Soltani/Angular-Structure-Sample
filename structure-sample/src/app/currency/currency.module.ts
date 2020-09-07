import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { AddCurrencyComponent } from './add-currency/add-currency.component';
import { CurrencyAddComponent } from './currency-add/currency-add.component';
import { CurrencyEditComponent } from './currency-edit/currency-edit.component';



@NgModule({
  declarations: [CurrencyListComponent, AddCurrencyComponent, CurrencyAddComponent, CurrencyEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyRoutingModule,
  ]
})
export class CurrencyModule { }
