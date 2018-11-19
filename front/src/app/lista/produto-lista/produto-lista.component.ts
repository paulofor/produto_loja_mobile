
import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoApi } from '../../shared/sdk';


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {


  itens: Produto[];
  errMess: string;

  constructor(private srv: ProdutoApi) {

  }

  ngOnInit() {
    this.srv.find()
      .subscribe((result: Produto[]) =>
        this.itens = result
      );
  }



}