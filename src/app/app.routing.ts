import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BolsasComponent } from './components/bolsas/bolsas.component';
import { PuntosComponent } from './components/puntos/puntos.component';
import { UsoPuntosComponent } from './components/uso-puntos/uso-puntos.component';
const appRoutes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'bolsas', component: BolsasComponent },
    { path: 'puntos/consultas', component: PuntosComponent },
    { path: 'puntos/usar', component: UsoPuntosComponent },
    { path: '**', component: AppComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

