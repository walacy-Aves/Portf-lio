const NOME = "Walacy Alves";
let tituloProfissional = "Desenvolverdor";
let minhaBio = "Sou um cara esforçado";
let anoFormatura = 2028;
let anoIgresso = 2025;
let indefinido;
let nulo = null;
let curso = "Desenvolvimento de Sistemas";

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoIgresso);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = anoFormatura;
document.getElementById("anoIgresso").innerText = anoIgresso;
document.getElementById("curso").innerText = curso;