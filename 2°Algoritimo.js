/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];

let itens = ["pão", "manteiga", "café"];
listaCompras.push(...itens);

if (listaCompras[listaCompras.length - 1].toLowerCase() !== "leite") {
  listaCompras.push("leite");
}

console.log(listaCompras);
