
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';  
import { PedidoListaComponent } from './pedido-lista/pedido-lista.component';  
import { CompradorListaComponent } from './comprador-lista/comprador-lista.component';  
import { PedidoProdutoListaComponent } from './pedido-produto-lista/pedido-produto-lista.component';  
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [  
    ProdutoListaComponent,  
    PedidoListaComponent,  
    CompradorListaComponent,  
    PedidoProdutoListaComponent,  
    ClienteListaComponent, TesteComponent,
  ],
  exports: [  
    ProdutoListaComponent,  
    PedidoListaComponent,  
    CompradorListaComponent,  
    PedidoProdutoListaComponent,  
    ClienteListaComponent, TesteComponent
  ]
})
export class ComponenteListaModule { }