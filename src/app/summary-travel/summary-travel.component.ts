import { Component, OnInit } from '@angular/core';
import { AppViagemService } from '../services/app-viagem.service';

@Component({
  selector: 'app-summary-travel',
  templateUrl: './summary-travel.component.html',
  styleUrls: ['./summary-travel.component.css']
})
export class SummaryTravelComponent implements OnInit {

  appViagemService: AppViagemService;

  constructor(appViagemService: AppViagemService) {
    this.appViagemService = appViagemService;
  }

  ngOnInit(): void {
  }
}
