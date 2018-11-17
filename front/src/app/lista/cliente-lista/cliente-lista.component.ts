
import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteApi } from '../../shared/sdk';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {


  itens: Cliente[];
  errMess: string;

  constructor(private srv: ClienteApi) {

  }

  ngOnInit() {
    this.srv.find()
      .subscribe((result: Cliente[]) =>
        this.itens = result
      );
  }



}