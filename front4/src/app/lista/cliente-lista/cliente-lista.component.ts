
import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteApi } from '../../shared/sdk';


@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss']
})
export class ClienteListaComponent implements OnInit {


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