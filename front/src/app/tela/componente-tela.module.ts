
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdutosTelaComponent } from './produtos-tela/produtos-tela';  
import { PedidoTelaComponent } from './pedido-tela/pedido-tela';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  
    ProdutosTelaComponent,  
    PedidoTelaComponent,
  ],
  exports: [  
    ProdutosTelaComponent,  
    PedidoTelaComponent,
  ]
})
export class ComponenteTelaModule { }