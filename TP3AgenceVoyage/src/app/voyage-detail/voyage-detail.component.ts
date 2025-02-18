import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from '../voyage.service';

@Component({
  selector: 'app-voyage-detail',
  templateUrl: './voyage-detail.component.html',
  styleUrls: ['./voyage-detail.component.css']
})
export class VoyageDetailComponent implements OnInit {
  voyage;

  constructor(private route: ActivatedRoute, private voyageService: VoyageService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.voyage = this.voyageService.voyages.find(v => v.id === id);  // Récupérer les détails du voyage
  }
}
