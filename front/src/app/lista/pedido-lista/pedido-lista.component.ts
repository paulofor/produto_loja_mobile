
import { Component, OnInit } from '@angular/core';
import { Pedido, PedidoApi } from '../../shared/sdk';


@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent implements OnInit {


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