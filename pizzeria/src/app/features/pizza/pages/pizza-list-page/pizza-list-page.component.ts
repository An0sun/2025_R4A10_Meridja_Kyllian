import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pizza-list-page',
  standalone: true,
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './pizza-list-page.component.html',
  styleUrl: './pizza-list-page.component.css',
})
export class PizzaListPageComponent {
  pizzas = [
    {
      name: 'Margherita',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.980GqsRwoZjg94qTuVdBZwHaJ_&pid=Api',
      description:
        'Une pizza classique avec sauce tomate, mozzarella et basilic frais.',
      ingredients: ['Tomate', 'Mozzarella', 'Basilic'],
      price: 8.99,
      rating: 4,
    },
    {
      name: 'Pepperoni',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.3Z4gvi7mZEpin_3jIwLHHgHaE7&pid=Api',
      description:
        'Une pizza savoureuse garnie de pepperoni épicé et de fromage fondu.',
      ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
      price: 10.99,
      rating: 5,
    },
    {
      name: 'Vegetarienne',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
      description: 'Un mélange délicieux de légumes frais et de fromage.',
      ingredients: [
        'Tomate',
        'Mozzarella',
        'Poivrons',
        'Champignons',
        'Oignons',
      ],
      price: 9.99,
      rating: 3,
    },
    {
      name: 'Quatre Fromages',
      image:
        'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
      description:
        'Une explosion de saveurs avec un mélange de quatre fromages.',
      ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Chèvre'],
      price: 11.99,
      rating: 5,
    },
  ];

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => (i < rating ? '★' : '☆'));
  }

  formatSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
