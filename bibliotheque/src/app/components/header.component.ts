import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="bg-purple-700 text-white py-4 text-center">
      <h1 class="text-2xl font-bold">Gestion des Livres</h1>
      <nav class="mt-2">
        <a routerLink="/" class="text-white text-lg mx-4 hover:text-gray-300 transition-colors">Accueil</a>
        <a routerLink="/book/create" class="text-white text-lg mx-4 hover:text-gray-300 transition-colors">Ajouter</a>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
