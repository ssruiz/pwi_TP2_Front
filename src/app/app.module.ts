
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // para usar ajax
import { FormsModule } from '@angular/forms'; // para usar two data binding
import { appRoutingProviders, routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material'
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { BolsasComponent } from './components/bolsas/bolsas.component';
import { PuntosComponent } from './components/puntos/puntos.component';
declare var M: any;
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { UsoPuntosComponent } from './components/uso-puntos/uso-puntos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BolsasComponent,
    PuntosComponent,
    UsoPuntosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,

    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
