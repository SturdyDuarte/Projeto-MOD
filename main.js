// Área de variáveis (Variable area)
const entrada=require('prompt-sync')({ sigint: false });
let papas = [];
let votos = [];
let numeroDosCandidatos = [0, 1, 2, 3, 4];
let continuarVotacao = true;
let continuarLoop = true;

 // Área de funções (Function area)

// Essa função irá realizar a votação (This function will conduct the voting)
function votacao(){
    while (continuarVotacao) {
    let voto = Number(entrada('Digite o número do candidato que deseja votar: '));

    // Verificando se o voto é válido (Checking if the vote is valid)
    if (numeroDosCandidatos.includes(voto)) {
        console.log(`Voto computado para ${papas[voto]}`);
        votos.push(voto);
    } else {
        console.log('Candidato inválido. Tente novamente.');
    }

    // Perguntando se o usuário deseja continuar votando (Asking if the user wants to continue voting)
    let continuar = entrada('Deseja continuar votando? (s/n): ').toLowerCase();
    if (continuar !== 's') {
        continuarVotacao = false;
    }
}

}

// Essa função irá mostrar a quantidade de votos para cada candidato (This function will show the number of votes for each candidate)
function mostrarVotos(){
    // Filtrando os votos para cada candidato (Filtering votes for each candidate)
    const contadorDeVotosCandidato0 = votos.filter(element => element === 0).length;
    const contadorDeVotosCandidato1 = votos.filter(element => element === 1).length;
    const contadorDeVotosCandidato2 = votos.filter(element => element === 2).length;
    const contadorDeVotosCandidato3 = votos.filter(element => element === 3).length;
    const contadorDeVotosCandidato4 = votos.filter(element => element === 4).length;
    // Mostrando os resultados (Showing the results)
    console.log(`O Candidato '${papas[0]} recebeu ${contadorDeVotosCandidato0} votos.`);
    console.log(`O Candidato '${papas[1]} recebeu ${contadorDeVotosCandidato1} votos.`);
    console.log(`O Candidato '${papas[2]} recebeu ${contadorDeVotosCandidato2} votos.`);
    console.log(`O Candidato '${papas[3]} recebeu ${contadorDeVotosCandidato3} votos.`);
    console.log(`O Candidato '${papas[4]} recebeu ${contadorDeVotosCandidato4} votos.`);
    console.log(`O total de votos computados foi de ${votos.length} votos.`);

    return {contadorDeVotosCandidato0, contadorDeVotosCandidato1, contadorDeVotosCandidato2, contadorDeVotosCandidato3, contadorDeVotosCandidato4};
}

// Essa função irá calcular o vencedor (This function will calculate the winner)
function calculandoVencedor(){
    const contadorDeVotosCandidato0 = votos.filter(element => element === 0).length;
    const contadorDeVotosCandidato1 = votos.filter(element => element === 1).length;
    const contadorDeVotosCandidato2 = votos.filter(element => element === 2).length;
    const contadorDeVotosCandidato3 = votos.filter(element => element === 3).length;
    const contadorDeVotosCandidato4 = votos.filter(element => element === 4).length;

    // Calculando se algum candidato obteve 2/3 dos votos (Calculating if any candidate got 2/3 of the votes)
    let winner = (2/3) * votos.length;
    if (contadorDeVotosCandidato0 >= winner) {
        console.log(`O Candidato '${papas[0]}' é o vencedor com ${contadorDeVotosCandidato0} votos.`)
        continuarLoop = false;
    } else if (contadorDeVotosCandidato1 >= winner) {
        console.log(`O Candidato '${papas[1]}' é o vencedor com ${contadorDeVotosCandidato1} votos.`)
        continuarLoop = false;
    } else if (contadorDeVotosCandidato2 >= winner) {
        console.log(`O Candidato '${papas[2]}' é o vencedor com ${contadorDeVotosCandidato2} votos.`)
        continuarLoop = false;
    } else if (contadorDeVotosCandidato3 >= winner) {
        console.log(`O Candidato '${papas[3]}' é o vencedor com ${contadorDeVotosCandidato3} votos.`)
        continuarLoop = false;
    } else if (contadorDeVotosCandidato4 >= winner) {
        console.log(`O Candidato '${papas[4]}' é o vencedor com ${contadorDeVotosCandidato4} votos.`)
        continuarLoop = false;
    } else {
        console.log('Nenhum candidato obteve 2/3 dos votos. Será necessário um novo turno de votações.');
        continuarLoop = true;
        continuarVotacao = true;
    }
    return continuarLoop, continuarVotacao;
}

// Coletando os nomes dos candidatos (Collecting the names of the candidates)
for (let i = 1; i <= 5; i++){
    let nome = entrada(`Digite o nome do ${i}° condidato: `);
    papas.push(nome);
}

// Mostrando os candidatos (Showing the candidates)
console.log(`Candidato n° 0 - ${papas[0]}. Candidato n° 1 ${papas[1]}. Candidato n° 2 ${papas[2]}. Candidato n° 3 ${papas[3]}. Candidato n° 4 ${papas[4]}.`);

// Loop principal do programa (Main loop of the program)
while (continuarLoop) {
    votacao();
    mostrarVotos();
    calculandoVencedor();
}


