/* 
Exercícios da semana 02

Crie um arquivo chamado hello-world.js e faça com que quando esse arquivo seja executado pelo node, seja exibido no console o texto "Meu primeiro arquivo javascript no node!";

Neste mesmo arquivo, adicione um código para que seja exibido no console o resultado da soma de 2 + 2. */


console.log("Meu primeiro arquivo javascript no node!");



const soma = (numero1, numero2) => {
    return numero1 + numero2;
};

console.log('O resultado da soma é: ', soma(2,2));