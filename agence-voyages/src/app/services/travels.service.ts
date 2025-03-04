import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data/data';
import { Travel } from '../models/travels.model';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  travels: Travel[] = [
    {
        id: 1,
        destination: "Bali, Indonésie",
        description: "Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.",
        prix: 799
    },
    {
        id: 2,
        destination: "Kyoto, Japon",
        description: "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
        prix: 899
    },
    {
        id: 3,
        destination: "Le Cap, Afrique du Sud",
        description: "Immergez-vous dans une culture riche et des traditions fascinantes.",
        prix: 2022
    },
    {
        id: 4,
        destination: "Santorin, Grèce",
        description: "Un mélange parfait entre nature sauvage et urbanisme captivant.",
        prix: 1513
    },
    {
        id: 5,
        destination: "Venise, Italie",
        description: "Immergez-vous dans une culture riche et des traditions fascinantes.",
        prix: 2233
    },
    {
        id: 6,
        destination: "Toronto, Canada",
        description: "Un mélange parfait entre nature sauvage et urbanisme captivant.",
        prix: 753
    },
    {
        id: 7,
        destination: "Toronto, Canada",
        description: "Immergez-vous dans une culture riche et des traditions fascinantes.",
        prix: 878
    },
    {
        id: 8,
        destination: "Rio de Janeiro, Brésil",
        description: "Explorez les merveilles cachées de cette destination et laissez-vous porter par son charme inégalé.",
        prix: 1350
    },
    {
        id: 9,
        destination: "Marrakech, Maroc",
        description: "Une expérience unique entre culture ancestrale et modernité vibrante.",
        prix: 1100
    },
    {
        id: 10,
        destination: "New York, États-Unis",
        description: "Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.",
        prix: 1800
    },
    {
        id: 11,
        destination: "Sydney, Australie",
        description: "Entre tradition et innovation, cette ville ne cesse de captiver ses visiteurs.",
        prix: 2100
    },
    {
        id: 12,
        destination: "Hanoï, Vietnam",
        description: "Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.",
        prix: 890
    },
    {
        id: 13,
        destination: "Bangkok, Thaïlande",
        description: "Un voyage hors du temps, où chaque coin de rue raconte une histoire.",
        prix: 760
    },
    {
        id: 14,
        destination: "Dubaï, Émirats Arabes Unis",
        description: "Un mélange parfait entre nature sauvage et urbanisme captivant.",
        prix: 2450
    },
    {
        id: 15,
        destination: "Londres, Royaume-Uni",
        description: "Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.",
        prix: 1700
    },
    {
        id: 16,
        destination: "Buenos Aires, Argentine",
        description: "Entre tradition et innovation, cette ville ne cesse de captiver ses visiteurs.",
        prix: 980
    },
    {
        id: 17,
        destination: "Copenhague, Danemark",
        description: "Un paradis pour les amateurs de gastronomie et d'architecture historique.",
        prix: 1430
    },
    {
        id: 18,
        destination: "Amsterdam, Pays-Bas",
        description: "Un voyage hors du temps, où chaque coin de rue raconte une histoire.",
        prix: 1240
    },
    {
        id: 19,
        destination: "Lisbonne, Portugal",
        description: "Immergez-vous dans une culture riche et des traditions fascinantes.",
        prix: 990
    },
    {
        id: 20,
        destination: "Phuket, Thaïlande",
        description: "Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.",
        prix: 1120
    },
    {
        id: 21,
        destination: "Reykjavik, Islande",
        description: "Un mélange parfait entre nature sauvage et urbanisme captivant.",
        prix: 1999
    },
    {
        id: 22,
        destination: "Bangkok, Thaïlande",
        description: "Explorez les merveilles cachées de cette destination et laissez-vous porter par son charme inégalé.",
        prix: 870
    },
    {
        id: 23,
        destination: "Venise, Italie",
        description: "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
        prix: 1340
    },
    {
        id: 24,
        destination: "Dubaï, Émirats Arabes Unis",
        description: "Un paradis pour les amateurs de gastronomie et d'architecture historique.",
        prix: 2490
    },
    {
        id: 25,
        destination: "Amsterdam, Pays-Bas",
        description: "Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.",
        prix: 1105
    }
];

  constructor() { }

  createTravel(travel: Travel): void {
    this.travels.push(travel);
  }

  getTravels(): Travel[] {
    return this.travels;
  }

  getTravel(id: number): Travel | null {
    return this.travels.find(travel => travel.id === id) ?? null;
  }

  deleteTravel(id: number): void {
    this.travels = this.travels.filter(travel => travel.id !== id);
  }

  generateTravel(): Travel {
    return {
      id: this.travels.length + 1,
      destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      prix: PRIX[Math.floor(Math.random() * PRIX.length)]
    };
  }
}



