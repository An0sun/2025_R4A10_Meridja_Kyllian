import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TravelDetailComponent } from './components/travel-detail/travel-detail.component';
import { TravelCreateComponent } from './components/travel-create/travel-create.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "travels/detail/:id",
        component: TravelDetailComponent
    },
    {
        path: "travels/create",
        component: TravelCreateComponent
    },
    {
        path: "404",
        component: NotFoundComponent
    },
    {
        path: "**",
        redirectTo: "404"
    }
];