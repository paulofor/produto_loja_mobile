import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';

import { ComponenteListaModule } from './lista/componente-lista.module';
import { ItemTesteComponent } from './item-teste/item-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTesteComponent
  ],
  imports: [
    BrowserModule,

    ComponenteListaModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
