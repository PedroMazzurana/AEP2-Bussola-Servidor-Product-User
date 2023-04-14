//import { StockType } from "./types/stock.types";
import StockModel from './stock.schema'
import ProductModel from '../products/product.schema'


export class StockService {

   
    async StockValue(){
        const stock = await ProductModel.find()
        stock.map(item => {
            let productStock = {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                stockValue: item.price * item.quantity
            }
          return StockModel.create(productStock) 

        })
        
    }

    async TotalValueStock(){
        const stock = await StockModel.find()
        const ValorTotal = stock.reduce((accStock,stock) => accStock + stock.stockValue,0)
        return ValorTotal
    }
}