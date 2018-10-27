
/* tslint:disable */
import {
  Pedido
} from '../index';

declare var Object: any;
export interface PedidoInterface {
  "id": number;
  "dataCriacao": date;
  "ativo": string;

}

export class Pedido implements PedidoInterface {
  "id": number;
  "dataCriacao": date;
  "ativo": string;
  constructor(data?: PedidoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Pedido";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of Pedido for dynamic purposes.
  **/
  public static factory(data: PedidoInterface): Pedido{
    return new Pedido(data);
  }
  /**
  * @method getModelDefinition
  * @author Paulo
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Pedido',
      plural: 'Pedidos',
      path: 'Pedidos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "dataCriacao" : {
        	name : "dataCriacao",
        	type : "date"
        },
        "ativo" : {
        	name : "ativo",
        	type : "string"
        },
      },
      relations: {
      }
    }
  }
}