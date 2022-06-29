import { Injectable } from '@angular/core';
import { AppViagemService } from './app-viagem.service';

@Injectable({
  providedIn: 'root',
})
export class CalcDistanceTravelService {
  appViagemService: AppViagemService;

  constructor(appViagemService: AppViagemService) {
    this.appViagemService = appViagemService;
  }

  private degreesToRadians(degrees: number) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }

  getDistance(
    originLatitude: number,
    originLongitude: number,
    destinationLatitude: number,
    destinationLongitude: number
  ) {
    const EARTH_RADIUS = 6_371.071; // Earth
    const diffLatitudeRadians = this.degreesToRadians(
      destinationLatitude - originLatitude
    );
    const diffLongitudeRadians = this.degreesToRadians(
      destinationLongitude - originLongitude
    );
    const originLatitudeRadians = this.degreesToRadians(originLatitude);
    const destinationLatitudeRadians =
      this.degreesToRadians(destinationLatitude);
    const kmDistance =
      2 *
      EARTH_RADIUS *
      Math.asin(
        Math.sqrt(
          Math.sin(diffLatitudeRadians / 2) *
            Math.sin(diffLatitudeRadians / 2) +
            Math.cos(originLatitudeRadians) *
              Math.cos(destinationLatitudeRadians) *
              Math.sin(diffLongitudeRadians / 2) *
              Math.sin(diffLongitudeRadians / 2)
        )
      );
    return kmDistance;
  }
}
