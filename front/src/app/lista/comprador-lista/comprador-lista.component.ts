
import { Component, OnInit } from '@angular/core';
import { Comprador, CompradorApi } from '../../shared/sdk';


@Component({
  selector: 'app-lista-comprador',
  templateUrl: './lista-comprador.component.html',
  styleUrls: ['./lista-comprador.component.scss']
})
export class ListaCompradorComponent implements OnInit {


  itens: Comprador[];
  errMess: string;

  constructor(private srv: CompradorApi) {

  }

  ngOnInit() {
    this.srv.find()
      .subscribe((result: Comprador[]) =>
        this.itens = result
      );
  }



}