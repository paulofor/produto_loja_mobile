
import { Component, OnInit } from '@angular/core';
import { PedidoProduto, PedidoProdutoApi } from '../shared/sdk';


@Component({
  selector: 'app-lista-pedido-produto',
  templateUrl: './lista-pedido-produto.component.html',
  styleUrls: ['./lista-pedido-produto.component.scss']
})
export class ListaPedidoProdutoComponent implements OnInit {


  itens: PedidoProduto[];
  errMess: string;

  constructor(private srv: PedidoProdutoApi) {

  }

  ngOnInit() {
    this.srv.find()
      .subscribe((result: PedidoProduto[]) =>
        this.itens = result
      );
  }



}