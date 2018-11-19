
import { Component, OnInit } from '@angular/core';
import { Pedido, PedidoApi } from '../../shared/sdk';


@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss']
})
export class PedidoListaComponent implements OnInit {


  itens: Pedido[];
  errMess: string;

  constructor(private srv: PedidoApi) {

  }

  ngOnInit() {
    this.srv.find()
      .subscribe((result: Pedido[]) =>
        this.itens = result
      );
  }



}