import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './users/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.post('/productCreate', productController.create)
routes.get('/productList', productController.list)
routes.get('/productGetById/:id', productController.findById)
routes.delete('/productDelete/:id', productController.remove)
routes.put('/productPut/:id', productController.update)
routes.get('/listStockValue', stockController.StockValue)
routes.get('/aleatoryProducts', productController.aleatoryProducts)
routes.get('/ValorTotalEstoque', stockController.TotalValueStock)
routes.get('/CriarArquivoProdutos', productController.CriarArquivoProdutos)
routes.get('/LerArquivoProdutos', productController.lerArquivo)




export default routes