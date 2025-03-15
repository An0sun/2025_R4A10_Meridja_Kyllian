import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PizzaService } from '../../../../services/pizza.service';
import { Pizza } from '../../../../models/pizza';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
  imports: [CommonModule, CurrencyPipe],
})
export class SinglePizzaComponent {
  pizza: Pizza | null = null;
  stars: string[] = []; 

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pizzaService = inject(PizzaService);

  constructor() {
    this.loadPizza();
  }

  private loadPizza(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.router.navigate(['/not-found']);
      return;
    }

    const foundPizza = this.pizzaService.findBySlug(slug);
    if (!foundPizza) {
      this.router.navigate(['/not-found']);
    } else {
      this.pizza = foundPizza;
      this.generateStars();
    }
  }

  private generateStars(): void {
    if (!this.pizza) return;
    this.stars = Array.from({ length: 5 }, (_, i) => (i < (this.pizza?.stars.length ?? 0) ? '★' : '☆'));
  }

  goToOrder(): void {
    if (this.pizza) {
      this.router.navigate(['/commander'], { queryParams: { pizza: this.pizza.slug } });
    }
  }
}
