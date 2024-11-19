/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let vetor = [5, 8, 2, 6, 3, 8, 9, 4, 8, 7];
let numero = 8; 

let indices = [];

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numero) {
    indices.push(i);
  }
}

if (indices.length > 0) {
  console.log(`O número ${numero} foi encontrado nos índices: ${indices.join(", ")}`);
} else {
  console.log(`O número ${numero} não foi encontrado no vetor.`);
}
