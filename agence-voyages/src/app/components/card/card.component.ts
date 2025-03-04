import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Travel } from '../../models/travels.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() travel!: Travel;
}
