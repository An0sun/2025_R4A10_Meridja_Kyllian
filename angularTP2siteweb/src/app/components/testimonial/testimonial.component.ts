import { Component } from '@angular/core';

// Définition de l'interface pour typer les témoignages
interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  // Liste des témoignages typée
  testimonials: Testimonial[] = [
    {
      image: 'lego_1.jpg', 
      name: 'Edward Newgate',
      role: 'Founder Circle',
      text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.'
    },
    {
      image: 'lego_2.jpg',
      name: 'John Doe',
      role: 'CEO',
      text: 'Innovative solutions that make a difference. Easy to use, effective and secure.'
    },
    {
      image: 'lego_3.jpg', 
      name: 'Sarah Smith',
      role: 'Marketing Manager',
      text: 'A wonderful experience! I highly recommend this service to everyone.'
    }
  ];

  // Index du témoignage affiché
  currentIndex: number = 0;

  // Getter typé pour récupérer le témoignage actuel
  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  // Méthode pour passer au témoignage suivant
  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  // Méthode pour revenir au témoignage précédent
  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}