import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = [
    {
      name: 'Margherita',
      slug: 'margherita',
      description: 'Une pizza classique avec sauce tomate et mozzarella.',
      stars: Array(4).fill('★'),
      price: 8.99,
      ingredients: ['Tomate', 'Mozzarella', 'Basilic'],
      image: 'https://tse2.mm.bing.net/th?id=OIP.980GqsRwoZjg94qTuVdBZwHaJ_&pid=Api',
    },
    {
      name: 'Pepperoni',
      slug: 'pepperoni',
      description: 'Une pizza avec du pepperoni épicé et du fromage fondu.',
      stars: Array(5).fill('★'),
      price: 10.99,
      ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
      image: 'https://tse2.mm.bing.net/th?id=OIP.3Z4gvi7mZEpin_3jIwLHHgHaE7&pid=Api',
    },
    {
      name: 'Vegetarienne',
      slug: 'vegetarienne',
      description: 'Un mélange délicieux de légumes frais et de fromage.',
      stars: Array(3).fill('★'),
      price: 9.99,
      ingredients: ['Tomate', 'Mozzarella', 'Poivrons', 'Champignons', 'Oignons'],
      image: 'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
    },
    {
      name: 'Quatre Fromages',
      slug: 'quatre-fromages', 
      description: 'Une pizza avec un mélange de quatre délicieux fromages.',
      stars: Array(5).fill('★'),
      price: 12.99,
      ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Chèvre'],
      image: 'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
    }
  ];

  getPizzas(): Pizza[] {
    return this.pizzas;
  }

  findBySlug(slug: string): Pizza | undefined {
    console.log("Recherche du slug :", slug);
    const foundPizza = this.pizzas.find(pizza => pizza.slug === slug);
    console.log("Pizza trouvée :", foundPizza);
    return foundPizza;
  }
}
