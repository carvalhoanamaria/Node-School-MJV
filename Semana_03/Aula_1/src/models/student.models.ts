// Representacao de algo/objeto - Nesse caso estudante

import { Schema } from 'mongoose';//schema representa o modelo para o banco de dados
import mongoose  from 'mongoose';
/* export interface Student {
   name : string;//Tipo primitivo
   email : string;
   document : string;
   password : string;
   age : number;
   phone? : string;// phone nao obrigatorio
} */

export const studentSchema = new Schema({
   name: {
      type: String
   },//Tipo Construtor
   email: {
      type: String
   },
   document: {
      type: String
   },
   password: {
    type: String
   },
   age: {
    type: Number
   },
   phone:{
      type: String
   },
   createAt:{
      type: Date,
      default: new Date()
   }
   });


export const Student = mongoose.model('Student',studentSchema);// model nesse cenario serve para ter acesso obj estudent do mongo