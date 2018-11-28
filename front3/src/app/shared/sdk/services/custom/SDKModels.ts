
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Produto } from '../../models/Produto';
import { Pedido } from '../../models/Pedido';
import { Comprador } from '../../models/Comprador';
import { PedidoProduto } from '../../models/PedidoProduto';
import { Cliente } from '../../models/Cliente';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	Produto: Produto,
	Pedido: Pedido,
	Comprador: Comprador,
	PedidoProduto: PedidoProduto,
	Cliente: Cliente,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
