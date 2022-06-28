import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City, Country } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppViagemService {

  constructor() { }

  countriesOrigin: Country[] = []
  countriesDestiny: Country[] = []
  citiesOrigin?: City[] = []
  citiesDestiny?: City[] = []
  qtdAdults: number = 0
  qtdchildren: number = 0
  typeFlight: string = ''
  form = new FormGroup({
    miles: new FormControl<number>(0),
    typeFlight: new FormControl<string>(''),
  })

  private _countrySelectOrigin?: Country
  private _countrySelectDestiny?: Country
  private _citySelectOrigin?: City
  private _citySelectDestiny?: City

  countrySelectOriginOutput?: string
  countrySelectDestinyOutput?: string
  citySelectOriginOutput?: string
  citySelectDestinyOutput?: string

  get countrySelectOrigin() {
    return this._countrySelectOrigin ?? null;
  }
  set countrySelectOrigin(country) {
    this.citiesOrigin = this.countriesOrigin.find(c => c === country)?.cities
    this.countrySelectOriginOutput = country?.country
    const c = { value: country }
    this._countrySelectOrigin = c?.value
  }

  get countrySelectDestiny() {
    return this._countrySelectDestiny ?? null;
  }
  set countrySelectDestiny(country) {
    this.citiesDestiny = this.countriesDestiny.find(c => c === country)?.cities
    this.countrySelectDestinyOutput = country?.country
  }

  get citySelectOrigin() {
    return this._citySelectOrigin ?? null;
  }
  set citySelectOrigin(city) {
    this.citySelectOriginOutput = city?.city
  }

  get citySelectDestiny() {
    return this._citySelectDestiny ?? null;
  }
  set citySelectDestiny(city) {
    this.citySelectDestinyOutput = city?.city
  }

  incrementQtdAdults() {
    this.qtdAdults++
  }
  decrementQtdAdults() {
    if (this.qtdAdults > 0) this.qtdAdults--
  }

  incrementQtdchildren() {
    this.qtdchildren++
  }
  decrementQtdchildren() {
    if (this.qtdchildren > 0) this.qtdchildren--
  }
}
