import {Request, Response, Router} from 'express';
import ProductsServices from '../services/products.services';

const router = Router();

//Listar todos os produtos
router.get('/', async (req: Request, res: Response) => {
    const products = await ProductsServices.gelAll();
    res.send(products);
});


//Listar um Produto em especifico
router.get('/:id', async  (req: Request, res: Response) => {
    

    try{
        const product = await ProductsServices.getById(Number(req.params.id));
        res.status(200).send(product);
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});

//Criar um Produto
router.post('/', async (req: Request, res: Response) => {
    try{
        await ProductsServices.create(req.body);
        res.status(201).send({message: 'Produto Criado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});

//Atualizar um Produto
router.put('/:id', async (req: Request, res: Response) => {
    try{
        await  ProductsServices.update(Number(req.params.id), req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});


// Deletar 
router.delete('/remove/:id', async (req: Request, res: Response) => {
    try{
        await ProductsServices.remove(Number(req.params.id));
        res.status(200).send({ message: 'Produto removido com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     } 
});



export default router;