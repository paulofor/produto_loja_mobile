import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { PrincipalRoutingModule } from './principal-routing/principal-routing.module';
import { PedidoNovoComponent } from './lista/pedido-novo/pedido-novo.component';
import { TesteSimplesComponent } from './teste-simples/teste-simples.component';



@NgModule({
  declarations: [
    AppComponent,
    PedidoNovoComponent,
    TesteSimplesComponent
  ],
  imports: [
    BrowserModule,
    PrincipalRoutingModule,
    SDKBrowserModule.forRoot()
    
  ],
  providers: [
    SocketDriver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
