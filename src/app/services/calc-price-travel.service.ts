import { Injectable } from '@angular/core';
import { AppViagemService } from './app-viagem.service'

@Injectable({
  providedIn: 'root'
})
export class CalcPriceTravelService {

  appViagemService: AppViagemService;

  constructor(appViagemService: AppViagemService) {
    this.appViagemService = appViagemService

    console.log(this.appViagemService.citySelectOrigin)
  }

  getDistance(originLatitude: number, originLongitude: number, destinationLatitude: number, destinationLongitude: number) {
    const EARTH_RADIUS = 6_371.071; // Earth
    const diffLatitudeRadians = destinationLatitude - originLatitude;
    const diffLongitudeRadians = destinationLongitude - originLongitude;
    const originLatitudeRadians = originLatitude;
    const destinationLatitudeRadians = destinationLatitude;

    const kmDistance = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(Math.sin(diffLatitudeRadians / 2) * Math.sin(diffLatitudeRadians / 2) + Math.cos(originLatitudeRadians) * Math.cos(destinationLatitudeRadians) * Math.sin(diffLongitudeRadians / 2) * Math.sin(diffLongitudeRadians / 2)));
    console.log("🚀 ~ file: calc-price-travel.service.ts ~ line 25 ~ CalcPriceTravelService ~ getDistance ~ kmDistance", kmDistance)

    return kmDistance;
  }


}




