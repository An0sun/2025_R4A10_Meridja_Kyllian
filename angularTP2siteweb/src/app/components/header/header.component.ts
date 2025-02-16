import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true, 
  imports: [CommonModule], 
})
export class HeaderComponent {
  isMenuOpen: boolean = false; 

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const width: number = (event.target as Window).innerWidth;
    if (width >= 768) {
      this.isMenuOpen = false;
    }
  }
}
