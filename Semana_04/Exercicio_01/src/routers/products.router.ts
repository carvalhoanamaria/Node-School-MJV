import {Request, Response, Router} from 'express';
import ProductsServices from '../services/products.services';

const router = Router();




//Listar todos os produtos
router.get('/', (req: Request, res: Response) => {
    const product = ProductsServices.gelAll();
    res.send(product);
});


//Listar um Produto em especifico
router.get('/:id', (req: Request, res: Response) => {
    const product = ProductsServices.getById(Number(req.params.id));
    if(!product) return res.status(400).send({message: "Produto não encontrado!"});
    res.status(200).send(product);
});

//Criar um Produto
router.post('/', (req: Request, res: Response) => {
    try{
        ProductsServices.create(req.body);
        res.status(201).send({message: 'Produto Criado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});

//Atualizar um Produto
//Atualizar Estudante
router.put('/:id', (req: Request, res: Response) => {
    try{
        ProductsServices.update(Number(req.params.id), req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});


// Deletar um Estudante
router.delete('/remove/:id', (req: Request, res: Response) => {
    try{
        ProductsServices.remove(Number(req.params.id));
        res.status(200).send({ message: 'Produto removido com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     } 
});



export default router;