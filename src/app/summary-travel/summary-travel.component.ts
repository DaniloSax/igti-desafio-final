import { Component, OnInit } from '@angular/core';
import { AppViagemService } from '../services/app-viagem.service';
import { CalcDistanceTravelService } from '../services/calc-distance-travel.service';

@Component({
  selector: 'app-summary-travel',
  templateUrl: './summary-travel.component.html',
  styleUrls: ['./summary-travel.component.css'],
})
export class SummaryTravelComponent {
  appViagemService: AppViagemService;
  calcDistanceTravel: CalcDistanceTravelService;

  constructor(
    appViagemService: AppViagemService,
    calcDistanceTravel: CalcDistanceTravelService
  ) {
    this.appViagemService = appViagemService;
    this.calcDistanceTravel = calcDistanceTravel;
  }

  get distance(): number {
    const originLatitude: number =
      this.appViagemService.citySelectOrigin?.latitude ?? 0;
    const originLongitude: number =
      this.appViagemService.citySelectOrigin?.longitude ?? 0;
    const destinationLatitude: number =
      this.appViagemService.citySelectDestiny?.latitude ?? 0;
    const destinationLongitude: number =
      this.appViagemService.citySelectDestiny?.longitude ?? 0;

    return this.calcDistanceTravel.getDistance(
      originLatitude,
      originLongitude,
      destinationLatitude,
      destinationLongitude
    );
  }

  get pricePerAdult(): number {
    const countryOrigin = this.appViagemService.countrySelectOrigin.country;
    const countryDestiny = this.appViagemService.countrySelectDestiny.country;
    const typeFlight = this.appViagemService.form.value.typeFlight;
    const miles = this.appViagemService.form.value.miles ?? 0;
    const qtdAdults = this.appViagemService.qtdAdults;
    let price = 0.0;

    if (countryOrigin === countryDestiny)
      price = this.distance * 0.3 * qtdAdults;
    else if (countryOrigin !== countryDestiny)
      price = this.distance * 0.5 * qtdAdults;

    if (typeFlight?.toLocaleLowerCase() == 'executiva') price *= 1.8;
    // if (miles > 0 && price > 0) price -= miles * 0.02;

    return price;
  }

  get pricePerChildren(): number {
    const countryOrigin = this.appViagemService.countrySelectOrigin.country;
    const countryDestiny = this.appViagemService.countrySelectDestiny.country;
    const typeFlight = this.appViagemService.form.value.typeFlight;
    const miles = this.appViagemService.form.value.miles ?? 0;
    const qtdAdults = this.appViagemService.qtdchildren;
    let price = 0.0;

    if (countryOrigin === countryDestiny)
      price = this.distance * 0.15 * qtdAdults;
    else if (countryOrigin !== countryDestiny)
      price = this.distance * 0.25 * qtdAdults;

    if (typeFlight?.toLocaleLowerCase() == 'executiva') price *= 1.4;
    // if (miles > 0 && price > 0) price -= miles * 0.02;

    return price;
  }

  get TotalMilesKilled(): number {
    const miles = this.appViagemService.form.value.miles ?? 0;
    return miles * 0.02;
  }
}
