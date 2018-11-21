
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdutoListaComponent } from './produto-lista.component/produto-lista.component';  
import { PedidoListaComponent } from './pedido-lista.component/pedido-lista.component';  
import { CompradorListaComponent } from './comprador-lista.component/comprador-lista.component';  
import { PedidoProdutoListaComponent } from './pedidoproduto-lista.component/pedidoproduto-lista.component';  
import { ClienteListaComponent } from './cliente-lista.component/cliente-lista.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  
    ProdutoListaComponent,  
    PedidoListaComponent,  
    CompradorListaComponent,  
    PedidoProdutoListaComponent,  
    ClienteListaComponent,
  ],
  exports: [  
    ProdutoListaComponent,  
    PedidoListaComponent,  
    CompradorListaComponent,  
    PedidoProdutoListaComponent,  
    ClienteListaComponent,
  ]
})
export class ComponenteListaModule { }