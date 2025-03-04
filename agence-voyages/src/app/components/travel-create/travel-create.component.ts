import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelsService } from '../../services/travels.service';
import { Travel } from '../../models/travels.model';

@Component({
  selector: 'app-travel-create',
  standalone: true,
  imports: [],
  templateUrl: './travel-create.component.html',
})
export class TravelCreateComponent {
  generatedTravel: Travel | null = null;
  constructor(
    private readonly travelsService: TravelsService,
    private readonly router: Router
  ) {}

  generateTravel(): void {
    this.generatedTravel = this.travelsService.generateTravel();
  }

  createTravel(): void {
    if (this.generatedTravel) {
      this.travelsService.createTravel(this.generatedTravel);
      this.generatedTravel = null;
      this.router.navigate(['/home']);
    }
  }

}