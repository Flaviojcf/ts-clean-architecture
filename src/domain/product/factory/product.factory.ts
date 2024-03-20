import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";
import {v4 as uuid} from "uuid";
import ProductB from "../entity/productb";

export default class ProductFactory {
    
    static create(type:string, name:string, price:number): ProductInterface {
       switch(type) {
            case "a":
                return new Product(uuid(), name, price)
            case "b":
                return new ProductB(uuid(), name, price*2)
            default:
                throw new Error("Product type not supported")
       }
    }
}