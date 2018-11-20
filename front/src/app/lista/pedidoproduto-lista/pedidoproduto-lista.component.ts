
import { Component, OnInit } from '@angular/core';
import { PedidoProduto, PedidoProdutoApi } from '../../shared/sdk';


@Component({
  selector: 'app-pedido-produto-lista',
  templateUrl: './pedido-produto-lista.component.html',
  styleUrls: ['./pedido-produto-lista.component.scss']
})
export class PedidoProdutoListaComponent implements OnInit {


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