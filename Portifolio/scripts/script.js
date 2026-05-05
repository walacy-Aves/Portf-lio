const NOME = "Walacy Alves";
let tituloProfissional = "Garoto de Programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado. Agora sou Baterista" +
    " Antes eu não era nada";
let anoFormatura = 2028;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2026;
let mesIngresso = 1;
let diaIngresso = 1;

let dataAtual = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = dataAtual.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = dataAtual.getFullYear(); // Ano atual
let diaAtual = dataAtual.getDate(); // Dia atual

let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias.`;