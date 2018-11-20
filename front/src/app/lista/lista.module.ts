import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidoComponent } from './pedido-lista/pedido-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListaPedidoComponent
  ],
  exports: [
    ListaPedidoComponent
  ]
})
export class ListaModule { }
