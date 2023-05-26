import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //si esta vacia la ruta como es la primera vez redirecciona a dashboard
  //El :carácter de dos puntos en pathindica que :ides un marcador de posición para un héroe específico id.
  { path: 'detail/:id', component: HeroDetailComponent },//usar la id del heroe para usarla parra la url y ver la vist de ese heroe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

