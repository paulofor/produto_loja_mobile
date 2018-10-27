
/* tslint:disable */
import {
  Comprador
} from '../index';

declare var Object: any;
export interface CompradorInterface {
  "id": number;
  "nome": string;
  "idP": number;

}

export class Comprador implements CompradorInterface {
  "id": number;
  "nome": string;
  "idP": number;
  constructor(data?: CompradorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Comprador";
  }
  /**
  * @method factory
  * @author Paulo 
  * @license MIT
  * This method creates an instance of Comprador for dynamic purposes.
  **/
  public static factory(data: CompradorInterface): Comprador{
    return new Comprador(data);
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
      name: 'Comprador',
      plural: 'Compradors',
      path: 'Compradors',
      idName: 'id',
      properties: {
		
        "id" : {
        	name : "id",
        	type : "number"
        },
        "nome" : {
        	name : "nome",
        	type : "string"
        },
        "idP" : {
        	name : "idP",
        	type : "number"
        },
      },
      relations: {
      }
    }
  }
}