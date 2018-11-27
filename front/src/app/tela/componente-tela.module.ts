
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdutosTelaComponent } from './produtos-tela.component/produtos-tela.component';  
import { PedidoTelaComponent } from './pedido-tela.component/pedido-tela.component';


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