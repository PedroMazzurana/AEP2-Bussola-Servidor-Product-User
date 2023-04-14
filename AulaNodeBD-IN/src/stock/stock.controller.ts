import {Request, Response} from 'express'
import { StockService } from './stock.service'

class StockController {
    
  
    async StockValue (req: Request, res: Response) {
        const stock = await new StockService().StockValue()

        return res.status(200).json('Stock cadastrado com sucesso!')
    }

    async TotalValueStock (req: Request, res: Response) {
        const stock = await new StockService().TotalValueStock()
        return res.status(200).json(stock)
    }
}

export default new StockController()