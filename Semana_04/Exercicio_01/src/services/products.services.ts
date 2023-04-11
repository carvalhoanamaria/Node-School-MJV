// Onde controla os dados

import { IProduct } from "../models/product.models";
import ProductRepository from "../repositories/product.repository";



class ProductsService{

     gelAll() {
        return  ProductRepository.getAll();
    }

    async  getById(id: number){
        const productIndex = await ProductRepository.getById(id);

        if(!productIndex)   throw new Error("Produto não encontrado!");
        
        
       return ProductRepository.getById(id);
     }

    create(product: IProduct){

        if(!product.description.trim()){
            throw new Error("Não foi possivel realizar o cadastro do produto pois não tem uma descrição.");
         } 

        return  ProductRepository.create(product);
    }
    

    async update(id: number, product: Partial <IProduct>){  
        const productIndex =  await ProductRepository.getById(id);
        if(!productIndex){
            throw new Error("Produto não encontrado!");
        }
        return  ProductRepository.update(id, product);
    }

    async remove(id: number){
        const productIndex = await ProductRepository.getById(id);
        if(!productIndex){
            throw new Error("Produto não encontrado!");
        }
        return  ProductRepository.remove(id);
    }

}


export default new ProductsService();

