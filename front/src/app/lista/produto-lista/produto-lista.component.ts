
import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoApi } from '../../shared/sdk';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {


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