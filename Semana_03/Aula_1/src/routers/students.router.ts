import {Request, Response, Router} from 'express';
import StudentsServices from '../services/students.services';

const router = Router();


//Listar todos os Estudantes
router.get('/', async (req: Request, res: Response) => {
    const students = await StudentsServices.gelAll();
    res.send(students);
});

//Listar um estudante
router.get('/:document', async (req: Request, res: Response) => {
    const student = await StudentsServices.getByDocument(req.params.document);
    if(!student) return res.status(400).send({message: "Estudante não encontrado!"});
    res.status(200).send(student);
});

//Criar um estudante
router.post('/', async (req: Request, res: Response) => {
    if(req.body.age < 18){
       return res.status(400).send({message: 'Não foi possivel realizar o cadastro do estudante pois não tem idade mínima (18 anos).'});
    }
   await  StudentsServices.create(req.body);//o que recebe
   res.status(201).send({message: 'Estudande Criado com sucesso!'});
  });

// Deletar um Estudante
router.delete('/remove/:document', async (req: Request, res: Response) => {
    try{
     await  StudentsServices.remove(req.params.document);
       res.status(200).send({message:'Estudante removido com sucesso!'});
    }catch(error: any){
       res.status(400).send({message: error.message});
    }
});

//Atualizar Estudante
router.put('/:document', async (req: Request, res: Response) => {
    try{
      await  StudentsServices.update(req.params.document, req.body);
        res.status(200).send({ message: 'Estudante atualizado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});


export default router;