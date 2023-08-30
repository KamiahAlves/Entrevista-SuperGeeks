/* Receber entrada do usuário */
const A = parseInt(prompt("Digite o número total de alunos: "));
const M = parseInt(prompt("Digite o número total de monitores: "));

/* Função para calcular o total de pessoas*/
function calcularViagens(A, M) {
    const limitePessoas = 10;
    const totalPessoas = A + M;

  /* Validar a saída conforme pedido e quantidade de pessoas*/
    if (M === 0) {
        return "Não, vocês precisam subir acompanhados por pelo menos 1 monitor.";
    }
    
    if (totalPessoas <= limitePessoas) {
        return "Sim, podemos levar todos em apenas 1 viagem.";
    } else {
        const viagensExtras = Math.ceil(totalPessoas / limitePessoas);
        /*Parte que estava dando errada na entrevista presencial*/
        return `Sim, podemos levar todos, mas precisaremos de ${viagensExtras} viagens.`; 
    }
}


/* Mostrar o resultado */
const resultado = calcularViagens(A, M);
console.log(resultado);
