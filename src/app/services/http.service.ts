import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';

export interface Country {
  country: string,
  cities: Array<City>
}

export interface City {
  city: string,
  latitude: number
  longitude: number
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  cbaseURL: string = ' http://localhost:3000';

  getcountries() {
    return this.http.get<Country[]>(`${this.cbaseURL}/countries`);
  }
}
