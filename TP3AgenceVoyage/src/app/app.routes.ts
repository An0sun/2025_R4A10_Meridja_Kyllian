import { Routes } from '@angular/router';

//export const routes: Routes = [];

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'voyage/:id', component: VoyageDetailComponent },
    { path: 'generation', component: GenerationComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];
  
  
