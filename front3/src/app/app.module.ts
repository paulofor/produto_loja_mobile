import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteTelaModule } from 'src/app/tela/componente-tela.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponenteTelaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
