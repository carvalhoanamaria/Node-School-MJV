// Representacao de algo/objeto - Nesse caso estudante

export interface Student {
   name : string;
   email : string;
   document : string;
   password : string;
   age : number;
   phone? : string;// phone nao obrigatorio
}