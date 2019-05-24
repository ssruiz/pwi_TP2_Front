import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clientes.service';
import { PuntosService } from '../../services/puntos.service';
import { ConceptoService } from '../../services/concepto.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-uso-puntos',
  providers: [ClienteService, PuntosService, ConceptoService],
  templateUrl: './uso-puntos.component.html',
  styleUrls: ['./uso-puntos.component.sass']
})
export class UsoPuntosComponent implements OnInit {

  constructor(private _clienteService: ClienteService, private _puntosService: PuntosService, private _conceptoService: ConceptoService, private snackBar: MatSnackBar) { }
  clientes: any[];
  conceptos: any[];

  ngOnInit() {
    this._clienteService.getClientes().subscribe(
      response => {
        console.log(response.clients);
        this.clientes = response.clients
      },
      error => {
        console.log(error);
      }
    );

    this._conceptoService.getConceptos().subscribe(
      response => {
        this.conceptos = response.conceptos;
      },
      error =>{
        console.log(error);
        
      }
    );
  }
  onSubmit() {
    console.log("Submit!")
    this._puntosService.usarPuntos(this._puntosService.formUso.value).subscribe(
      response => {
        console.log(response);
        this.openSnackBar(response.resultado, "Resultado");
      },
      error => {
        console.log(error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
