import { Component } from '@angular/core';

// Interface pour mieux structurer les données
interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  // Dossier contenant les icônes pour éviter de répéter le chemin
  private readonly ICON_PATH = 'assets/icons/';

  // Liste des services avec typage
  services: Service[] = [
    { 
      icon: `${this.ICON_PATH}search-doctor.svg`, 
      title: 'Search doctor', 
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals.'
    },
    { 
      icon: `${this.ICON_PATH}online-pharmacy.svg`, 
      title: 'Online pharmacy', 
      description: 'Buy your medicines with our mobile application with a simple delivery system.'
    },
    { 
      icon: `${this.ICON_PATH}consultation.svg`, 
      title: 'Consultation', 
      description: 'Free consultation with our trusted doctors and get the best recommendations.'
    },
    { 
      icon: `${this.ICON_PATH}details-info.svg`, 
      title: 'Details info', 
      description: 'Free consultation with our trusted doctors and get the best recommendations.'
    },
    { 
      icon: `${this.ICON_PATH}emergency-care.svg`, 
      title: 'Emergency care', 
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family.'
    },
    { 
      icon: `${this.ICON_PATH}tracking.svg`, 
      title: 'Tracking', 
      description: 'Track and save your medical history and health data.'
    }
  ];
}
