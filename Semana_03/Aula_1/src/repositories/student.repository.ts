import { IStudent, Student } from "../models/student.models";


 class StudentRepository{
    getAll(){ //Busca todos
        return Student.find();
    }

    getByDocument(document: string){ //Busca somente um
       return Student.findOne({ document: document});
    }

    create(student: IStudent){
        return Student.create(student);
    }

    update(document : string, student: Partial<IStudent>){//identificador do estudande, o que voce quer atualizar
        return Student.updateOne({ document: document }, { $set: student });
    }

    remove(document: string){
       return Student.deleteOne({ document: document });
    }
 }

 export default new StudentRepository();