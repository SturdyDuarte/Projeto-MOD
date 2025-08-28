// The beginning of MOD project!!
const entrada=require('prompt-sync')({ sigint: false });
let papas = [];
let votos = [];
let numeroDosCandidatos = [0, 1, 2, 3, 4];
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
    if (numeroDosCandidatos.includes(voto)) {
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

// Counting votes for candidate 0 (Contando votos para os candidatos)
const contadorDeVotosCandidato0 = votos.filter(element => element === 0).length;
const contadorDeVotosCandidato1 = votos.filter(element => element === 1).length;
const contadorDeVotosCandidato2 = votos.filter(element => element === 2).length;
const contadorDeVotosCandidato3 = votos.filter(element => element === 3).length;
const contadorDeVotosCandidato4 = votos.filter(element => element === 4).length;

// Displaying the qantity of votes (Mostrando a quantidade de votos)
console.log(`O Candidato '${papas[0]} recebeu ${contadorDeVotosCandidato0} votos.`);
console.log(`O Candidato '${papas[1]} recebeu ${contadorDeVotosCandidato1} votos.`);
console.log(`O Candidato '${papas[2]} recebeu ${contadorDeVotosCandidato2} votos.`);
console.log(`O Candidato '${papas[3]} recebeu ${contadorDeVotosCandidato3} votos.`);
console.log(`O Candidato '${papas[4]} recebeu ${contadorDeVotosCandidato4} votos.`);