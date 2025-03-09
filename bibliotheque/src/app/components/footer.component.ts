import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white text-center py-4 mt-8">
      <p>&copy; 2025 Gestion des Livres</p>
    </footer>
  `,
})
export class FooterComponent {}
