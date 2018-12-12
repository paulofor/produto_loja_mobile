

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from 'src/app/shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { ProdutoApi } from 'src/app/shared/sdk';
import { PedidoApi } from 'src/app/shared/sdk';
import { CompradorApi } from 'src/app/shared/sdk';
import { PedidoProdutoApi } from 'src/app/shared/sdk';
import { ClienteApi } from 'src/app/shared/sdk';


@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
		SocketDriver,
		SDKModels,
		LoopBackAuth,
		InternalStorage,
		ProdutoApi,
		PedidoApi,
		CompradorApi,
		PedidoProdutoApi,
		ClienteApi,
	],
	declarations: 
	[
	]
})
export class ServicoModule { }