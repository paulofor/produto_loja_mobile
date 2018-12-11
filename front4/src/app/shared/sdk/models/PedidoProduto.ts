
/* tslint:disable */
import {
 
} from '../index';

declare var Object: any;
export interface PedidoProdutoInterface {
  "id": number;

}

export class PedidoProduto implements PedidoProdutoInterface {
  "id": number;
  constructor(data?: PedidoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "PedidoProduto";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of PedidoProduto for dynamic purposes.
  **/
  public static factory(data: PedidoProdutoInterface): PedidoProduto{
    return new PedidoProduto(data);
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
      name: 'PedidoProduto',
      plural: 'PedidoProdutos',
      path: 'PedidoProdutos',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}