import { ProductType } from "./types/product.types";
import ProductModel from './product.schema'
import {readFile, writeFile} from 'fs/promises'


export class ProductService {


    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const ProductList = await ProductModel.find()

        return ProductList
    }

    async findProduct(id) {
        const product = await ProductModel.findById(id)

        return product
    }

    async remove(id) {

       const product = await ProductModel.findByIdAndDelete(id)
       return product
       
    }

    async update(id, infos: ProductType) {
        const updateProduct = await ProductModel.findByIdAndUpdate({_id: id},{
            name: infos.name,
            quantity: infos.quantity,
            price: infos.price
        },{new:true})

        return updateProduct
    }

    async aleatoryProducts(){
        const product = await ProductModel.find()
         function getRandomValuesFromArray(product: any, numeroAleatorio: any) {
            if(numeroAleatorio > product.length) return console.error("A quantidade de elementos aleatórios é superior ao número de elementos na lista!");
            
            let ArrayProdutosAleatorios:any = []
        
            while(ArrayProdutosAleatorios.length < numeroAleatorio) {
                let numeroAleatorio: any = Math.floor(Math.random() * product.length)
                if(!ArrayProdutosAleatorios.includes(product[numeroAleatorio])) {
                    ArrayProdutosAleatorios.push(product[numeroAleatorio])
                }
            }
            let ArrayProdutosAleatorios2:any = []

            for(let i = 0; i < 4; i++){
                ArrayProdutosAleatorios2[i] = ArrayProdutosAleatorios[i]
            }
            
            return ArrayProdutosAleatorios2
        }
        return getRandomValuesFromArray(product, 10)
    }

    async ArquivoProdutos(){
        const product = await ProductModel.find()
        function getFileProduct(){
            try {
                writeFile('ArquivoProdutos.json', JSON.stringify(product, null, 2))
    
            }
            catch(err) {
                console.error('erro na escrita', err)
            }
        }
        return getFileProduct()

    }

    async LerArquivoProduto() {
        
        const readProduct = readFile('ArquivoProdutos.json', "utf-8")
        
        return readProduct
    }

    
}