import { Component, OnInit, ViewChild } from '@angular/core';
import { PuntosService } from '../../services/puntos.service';
import { ClienteService } from '../../services/clientes.service';
import { ConceptoService } from '../../services/concepto.service';
import { MatTableDataSource, MatSort, MAT_DATE_LOCALE } from '@angular/material';
@Component({
  selector: 'app-puntos',
  providers: [PuntosService, ConceptoService, ClienteService,
    ,    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],
  templateUrl: './puntos.component.html',
  styleUrls: ['./_grid.sass']
})
export class PuntosComponent implements OnInit {
  clientes: any[];
  conceptos: any[];
  puntos: MatTableDataSource<any>;
  
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['cliente','concepto','puntaje_utilizado','fecha'];
  

  constructor(private _puntosService: PuntosService, private _clienteService: ClienteService, private _conceptoService: ConceptoService) { 
   
  }

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
    this._puntosService.getPuntos(this._puntosService.form.value).subscribe(
      response => {
        console.log(response);
        this.puntos = new MatTableDataSource(response.puntos);
        this.puntos.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }
}
