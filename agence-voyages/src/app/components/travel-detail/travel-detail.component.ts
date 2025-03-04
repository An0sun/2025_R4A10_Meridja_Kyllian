import { Component } from '@angular/core';
import { TravelsService } from '../../services/travels.service';
import { Travel } from '../../models/travels.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-travel-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './travel-detail.component.html',
})
export class TravelDetailComponent {
  travel: Travel | null = null;
  showDialog = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly travelsService: TravelsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.travel = this.travelsService.getTravel(id);
    if (!this.travel) {
      this.router.navigate(['/404']);
    }
  }

  confirmDelete(): void {
    this.showDialog = true;
  }

  cancelDelete(): void {
    this.showDialog = false;
  }

  onDelete(): void {
    if (this.travel) {
      this.travelsService.deleteTravel(this.travel.id);
      this.router.navigate(['/home']);
    }
  }
}