import {Request, Response, Router} from 'express';

const router = Router();

const students = [

    {
        name: 'Nathan Carlos',
        email: 'nath@gmail.com',
        document: '92212445040',
        password: '123456',
        age: 22
    },
    
    {
        name: 'Gabriel Sousa',
        email: 'gab@gmail.com',
        document: '92212445041',
        password: '1234567',
        age: 23
    },
    
    {
        name: 'Carlos Pereira',
        email: 'carlos@gmail.com',
        document: '92212445046',
        password: '01234',
        age: 24
    },
    
    {
        name: 'Ana Flavia',
        email: 'ana@gmail.com',
        document: '92212445060',
        password: '0147',
        age: 25
    },

];

//Listar todos os Estudantes
router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

//Listar um estudante
router.get('/:pdocument', (req: Request, res: Response) => {
    const student = students.find((student) => student.document === req.params.pdocument);
    if(!student) return res.status(400).send({message: "Estudante não encontrado!"});
    res.status(200).send(student);
});


//Criar um estudante
router.post('/', (req: Request, res: Response) => {
    if(req.body.age < 18){
       return res.status(400).send({message: 'Não foi possivel realizar o cadastro do estudante pois não tem idade mínima (18 anos).'});
    }
    students.push(req.body);//o que recebe
  //  res.send({message: 'Estudande Criado com sucesso!'});//send o que devolve
  res.status(201).send({message: 'Estudande Criado com sucesso!'});
  });

// Deletar um Estudante
router.delete('/remove/:pdocument', (req: Request, res: Response) => {
    //console.log(req.params);
   const studentIndex = students.findIndex((student) => student.document === req.params.pdocument);
   
   if(studentIndex === -1){//quando nao encontra retorna -1
       res.status(400).send({message: 'Estudante não encontrado!'});
   }
    students.splice(studentIndex, 1);
    res.status(200).send({message:'Estudante removido com sucesso!'});
});

//Atualizar Estudante
//PUT Pode passar tanto pelo parametro quanto pelo corpo
router.put('/:pdocument', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.pdocument);
    if(studentIndex === -1){//quando nao encontra retorna -1
        res.status(400).send({message: 'Estudante não encontrado!'});
    }
    students [studentIndex] = req.body;
    res.status(200).send({ message: 'Estudante atualizado com sucesso!'});
});


export default router;