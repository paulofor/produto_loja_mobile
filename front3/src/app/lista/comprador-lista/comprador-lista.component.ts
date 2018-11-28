
import { Component, OnInit } from '@angular/core';
import { Comprador, CompradorApi } from '../../shared/sdk';


@Component({
  selector: 'app-comprador-lista',
  templateUrl: './comprador-lista.component.html',
  styleUrls: ['./comprador-lista.component.scss']
})
export class CompradorListaComponent implements OnInit {


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