// The beginning of MOD project!!
const entrada=require('prompt-sync')({ sigint: false });
let papas = [];
let votos = [];
let listaVotos = [0, 1, 2, 3, 4];
let votacao = true;

// Collecting names of 5 candidates (Coletando dados de 5 candidatos)
for (let i = 1; i <= 5; i++){
    let nome = entrada(`Digite o nome do ${i}° condidato: `);
    papas.push(nome);
}

// Displaying the list of candidates (Mostrando a lista de candidatos)
console.log(`Candidato n° 0 - ${papas[0]}. Candidato n° 1 ${papas[1]}. Candidato n° 2 ${papas[2]}. Candidato n° 3 ${papas[3]}. Candidato n° 4 ${papas[4]}.`);

while (votacao) {
    let voto = Number(entrada('Digite o número do candidato que deseja votar: '));

    // Check if the vote is valid (Verificando se o voto é válido)
    if (listaVotos.includes(voto)) {
        console.log(`Voto computado para ${papas[voto]}`);
        votos.push(voto);
    } else {
        console.log('Candidato inválido. Tente novamente.');
    }

    // Asking if the user wants to continue voting (Perguntando se o usuário quer continuar votando)
    let continuar = entrada('Deseja continuar votando? (s/n): ').toLowerCase();
    if (continuar !== 's') {
        votacao = false;
    }
}

console.log('Votação encerrada. Obrigado por participar!');