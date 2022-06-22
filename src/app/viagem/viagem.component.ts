import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService, Country, City } from '../services/http.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})

export class ViagemComponent implements OnInit {

  countriesOrigin: Country[] = []
  countriesDestiny: Country[] = []
  citiesOrigin?: City[] = []
  citiesDestiny?: City[] = []

  private _countrySelectOrigin?: Country
  private _countrySelectDestiny?: Country

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getcountries().subscribe(data => this.countriesOrigin = data);
    this.http.getcountries().subscribe(data => this.countriesDestiny = data);
  }

  get countrySelectOrigin() {
    return this._countrySelectOrigin ?? null;
  }
  set countrySelectOrigin(country) {
    this.citiesOrigin = this.countriesOrigin.find(c => c === country)?.cities
  }
  get countrySelectDestiny() {
    return this._countrySelectDestiny ?? null;
  }
  set countrySelectDestiny(country) {
    this.citiesDestiny = this.countriesDestiny.find(c => c === country)?.cities
  }

}
