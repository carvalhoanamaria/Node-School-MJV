// Onde controla os dados

import { Student } from "../models/student.models";

 class StudentsService{
     students : Array<Student> = [

        {
            name: 'Nathan Carlos',
            email: 'nath@gmail.com',
            document: '92212445040',
            password: '123456',
            age: 22,
            phone: '141646446'
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

    gelAll( ) {
        return this.students;
    }

    getByDocument(document: string){
     const student =  this.students.find((student) => student.document === document);
      return student;
    }

    create(student: Student){
     this.students.push(student);
    }

    remove(document: string){
     const studentIndex = this.students.findIndex((student) => student.document === document);
     if(studentIndex === -1){//quando nao encontra retorna -1
        throw new Error("Estudante não encontrado!"); 
     }
        this.students.splice(studentIndex, 1);
    }

    update(document: string, student: Student){  
        const studentIndex = this.students.findIndex((student) => student.document === document);
        if(studentIndex === -1){//quando nao encontra retorna -1
            throw new Error("Estudante não encontrado!");
        }
        this.students [studentIndex] = student;
    }


}



export default new StudentsService();

