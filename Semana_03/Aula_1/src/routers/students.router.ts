import {Request, Response, Router} from 'express';
import StudentsServices from '../services/students.services';

const router = Router();


//Listar todos os Estudantes
router.get('/', (req: Request, res: Response) => {
    const students = StudentsServices.gelAll();
    res.send(students);
});

//Listar um estudante
router.get('/:document', (req: Request, res: Response) => {
    const student = StudentsServices.getByDocument(req.params.document);
    if(!student) return res.status(400).send({message: "Estudante não encontrado!"});
    res.status(200).send(student);
});

//Criar um estudante
router.post('/', (req: Request, res: Response) => {
    if(req.body.age < 18){
       return res.status(400).send({message: 'Não foi possivel realizar o cadastro do estudante pois não tem idade mínima (18 anos).'});
    }
    StudentsServices.create(req.body);//o que recebe
  res.status(201).send({message: 'Estudande Criado com sucesso!'});
  });

// Deletar um Estudante
router.delete('/remove/:document', (req: Request, res: Response) => {
    try{
       StudentsServices.remove(req.params.document);
       res.status(200).send({message:'Estudante removido com sucesso!'});
    }catch(error: any){
       res.status(400).send({message: error.message});
    }
});

//Atualizar Estudante
router.put('/:document', (req: Request, res: Response) => {
    try{
        StudentsServices.update(req.params.document, req.body);
        res.status(200).send({ message: 'Estudante atualizado com sucesso!'});
    }catch(error: any){
        res.status(400).send({message: error.message});
     }  
});


export default router;