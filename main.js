// The beginning of MOD project!!
const entrada=require('prompt-sync')({ sigint: false });
let papas = [];

// Collecting names of 5 candidates (Coletando dados de 5 candidatos)
for (let i = 1; i <= 5; i++){
    let nome = entrada(`Digite o nome do ${i}° condidato: `);
    papas.push(nome);
}

// Displaying the list of candidates (Mostrando a lista de candidatos)
console.log(papas);