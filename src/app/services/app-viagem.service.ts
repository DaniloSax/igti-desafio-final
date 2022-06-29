import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City, Country } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AppViagemService {
  constructor() {}

  countriesOrigin: Country[] = [];
  countriesDestiny: Country[] = [];
  citiesOrigin?: City[] = [];
  citiesDestiny?: City[] = [];
  qtdAdults: number = 0;
  qtdchildren: number = 0;
  form = new FormGroup({
    miles: new FormControl<number>(0),
    typeFlight: new FormControl<string>(''),
  });

  private _countrySelectOrigin: Country = { cities: [], country: '' };
  private _countrySelectDestiny: Country = { cities: [], country: '' };
  private _citySelectOrigin: City = { city: '', latitude: 0, longitude: 0 };
  private _citySelectDestiny: City = { city: '', latitude: 0, longitude: 0 };

  get countrySelectOrigin() {
    return this._countrySelectOrigin;
  }
  set countrySelectOrigin(country: Country) {
    this.citiesOrigin = this.countriesOrigin.find((c) => c === country)?.cities;
    this._countrySelectOrigin = country;
  }

  get countrySelectDestiny() {
    return this._countrySelectDestiny;
  }
  set countrySelectDestiny(country: Country) {
    this.citiesDestiny = this.countriesDestiny.find(
      (c) => c === country
    )?.cities;
    this._countrySelectDestiny = country;
  }

  get citySelectOrigin() {
    return this._citySelectOrigin;
  }
  set citySelectOrigin(city: City) {
    this._citySelectOrigin = city;
  }

  get citySelectDestiny() {
    return this._citySelectDestiny;
  }
  set citySelectDestiny(city: City) {
    this._citySelectDestiny = city;
  }

  incrementQtdAdults() {
    this.qtdAdults++;
  }
  decrementQtdAdults() {
    if (this.qtdAdults > 0) this.qtdAdults--;
  }

  incrementQtdchildren() {
    this.qtdchildren++;
  }
  decrementQtdchildren() {
    if (this.qtdchildren > 0) this.qtdchildren--;
  }
}
