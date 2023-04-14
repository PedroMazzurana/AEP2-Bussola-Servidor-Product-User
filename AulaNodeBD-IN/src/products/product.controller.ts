import {Request, Response} from 'express'
import { ProductService } from './product.service'

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().list()

        return res.status(200).json(product)
    }

    async findById(req: Request, res: Response) {
        const product = await new ProductService().findProduct(req.params.id)

        return res.status(200).json(product)
    }

    async remove(req: Request, res: Response) {
        
        try {
            const product = await new ProductService().remove(req.params.id)
            return res.status(200).json("Deletado com Sucesso!")
            
        } catch (error) {
            throw new error
        }
        
    }

    async update (req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id,req.body)

        return res.status(200).json(product)
    }

    async aleatoryProducts (req: Request, res: Response) {
        const product = await new ProductService().aleatoryProducts()
        return res.status(200).json(product)
    }

    async CriarArquivoProdutos (req: Request, res: Response) {
        const product = await new ProductService().ArquivoProdutos()
        return res.status(200).json(product)
    }
    
    async lerArquivo (req: Request, res: Response){
        try {
            const product = await new ProductService().LerArquivoProduto()
            //const readed = JSON.parse(product)
            return res.status(200).send(product)

        } catch (error) {
            throw new error
        }
    }

    
}

export default new ProductController()