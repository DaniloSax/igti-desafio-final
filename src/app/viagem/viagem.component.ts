import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService, Country, City } from '../services/http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AppViagemService } from '../services/app-viagem.service';
@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})

export class ViagemComponent implements OnInit {

  appViagemService: AppViagemService;

  constructor(appViagemService: AppViagemService, private http: HttpService) {
    this.appViagemService = appViagemService
  }

  ngOnInit(): void {
    this.http.getcountries().subscribe(data => this.appViagemService.countriesOrigin = data);
    this.http.getcountries().subscribe(data => this.appViagemService.countriesDestiny = data);
  }

}
