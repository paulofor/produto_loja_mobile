import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoApi, ProdutoApi, ClienteApi, CompradorApi, SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from 'src/app/shared/sdk';
import { PedidoListaComponent } from 'src/app/lista/pedido-lista/pedido-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [
    PedidoApi,
    ProdutoApi,
    ClienteApi,
    CompradorApi,
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage
  ],
  declarations: 
  [
   

  ]
})
export class ServicoModule { }
