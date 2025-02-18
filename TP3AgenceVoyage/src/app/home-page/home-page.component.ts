import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  voyages = [];

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.voyages = this.voyageService.getVoyages(0); // Charge les voyages de la première page
  }

  // Méthode pour gérer la pagination si nécessaire
  loadMore(page: number): void {
    this.voyages = this.voyageService.getVoyages(page);
  }
}
