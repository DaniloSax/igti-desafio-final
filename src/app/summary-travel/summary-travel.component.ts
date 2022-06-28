import { Component, OnInit } from '@angular/core';
import { AppViagemService } from '../services/app-viagem.service';
import { CalcPriceTravelService } from '../services/calc-price-travel.service';

@Component({
  selector: 'app-summary-travel',
  templateUrl: './summary-travel.component.html',
  styleUrls: ['./summary-travel.component.css']
})
export class SummaryTravelComponent implements OnInit {

  appViagemService: AppViagemService;
  calcPriceTravelService: CalcPriceTravelService;

  constructor(appViagemService: AppViagemService, calcPriceTravelService: CalcPriceTravelService) {
    this.appViagemService = appViagemService;
    this.calcPriceTravelService = calcPriceTravelService;
  }

  ngOnInit(): void {
  }

  get distance() {
    const originLatitude: number = this.appViagemService.citySelectOrigin?.latitude ?? 0
    const originLongitude: number = this.appViagemService.citySelectOrigin?.longitude ?? 0
    const destinationLatitude: number = this.appViagemService.citySelectDestiny?.latitude ?? 0
    const destinationLongitude: number = this.appViagemService.citySelectDestiny?.longitude ?? 0

    console.log("🚀 ~ file: summary-travel.component.ts ~ line 25 ~ SummaryTravelComponent ~ getdistance ~ this.appViagemService.citySelectOrigin?.latitude", this.appViagemService.citySelectOrigin?.latitude)
    // return originLatitude ?? 0
    return this.calcPriceTravelService.getDistance(originLatitude, originLongitude, destinationLatitude, destinationLongitude)
  }
}
