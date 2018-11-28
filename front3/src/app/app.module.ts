import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteTelaModule } from 'src/app/tela/componente-tela.module';
import { ComponenteListaModule } from './lista/componente-lista.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponenteTelaModule,
    ComponenteListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
