import { Component, OnInit, ViewChild } from '@angular/core';
import { BolsaService } from '../../services/bolsas.service'
import { ClienteService } from '../../services/clientes.service'
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-bolsas',
  templateUrl: './bolsas.component.html',
  providers: [BolsaService, ClienteService],
  styleUrls: ['./bolsas.component.sass']
})
export class BolsasComponent implements OnInit {

  constructor(private _bolsaService: BolsaService, private _clienteService: ClienteService) { }
  clientes: any[];
  bolsas: MatTableDataSource<any>;
  displayedColumns: string[] = ['cliente','puntaje_asignado','puntaje_utilizado','saldo'];
  @ViewChild(MatSort) sort: MatSort;

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

  }

  onSubmit() {
    console.log("Submit!")
    this._bolsaService.getBolsas(this._bolsaService.form.value).subscribe(
      response => {
        console.log(response);
        this.bolsas = new MatTableDataSource(response.bolsas);
        this.bolsas.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }



}
