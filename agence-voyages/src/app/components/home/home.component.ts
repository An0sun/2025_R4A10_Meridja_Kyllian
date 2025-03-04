import { Component } from '@angular/core';
import { TravelsService } from '../../services/travels.service';
import { CardComponent } from '../card/card.component';
import { Travel } from '../../models/travels.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  travels: Travel[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private readonly travelsService: TravelsService) {}

  ngOnInit(): void {
    this.travels = this.travelsService.getTravels();
  }

  get paginatedTravels(): Travel[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.travels.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.travels.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}