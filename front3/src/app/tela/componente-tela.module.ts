
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdutosTelaComponent } from './produtos-tela/produtos-tela.component';  
import { PedidoTelaComponent } from './pedido-tela/pedido-tela.component';
import { ComponenteListaModule } from '../lista/componente-lista.module';


@NgModule({
  imports: [
    CommonModule,
    ComponenteListaModule
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