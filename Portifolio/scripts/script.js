const NOME = "Walacy José Alves Lopes";
let tituloProfissional = "Tentando ser um Desenvolvedor";
let minhaBio = "Sou um cara esforçado";
let anoFormatura = 2027;
let anoIgresso = 2026;
let mesFormatura = 12;
let diaFormatura = 31;
let mesIgresso = 4;
let diaIgresso = 15;
let indefinido;
let nulo = null;

const DATAATUAL = new Date(); // data atual, biblioteca de data do JavaScript
let mesAtual = DATAATUAL.getMonth() + 1; // pega o mês atual (adiciona 1 pois os meses começam em 0)
let anoAtual = DATAATUAL.getFullYear(); // pega o ano atual
let diaAtual = DATAATUAL.getDate(); // pega o dia atual

let curso = {
    nome: "Desenvolvimento de Sistemas",
    duracao: "2 anos",
    instituicao: "PROZ EDUCAÇÃO"
};

const dataInicio = new Date(anoIgresso, mesIgresso - 1, diaIgresso);
const dataFinal = new Date(anoFormatura, mesFormatura - 1, diaFormatura);

const tempoTotal = dataFinal - dataInicio;
const tempoDecorrido = DATAATUAL - dataInicio;

let porcentagem = (tempoDecorrido / tempoTotal) * 100;
porcentagem = Math.min(Math.max(porcentagem, 0), 100).toFixed(2);

// Exibindo os tipos de dados no console
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoIgresso);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

// --- FUNÇÕES DO PROJETO ---

// 1. Função para carregar e exibir os dados do perfil no HTML
function carregarDadosDoPerfil() {
    document.getElementById("meuNome").innerText = NOME;
    document.getElementById("tituloProfissional").innerText = `Profissão: ${tituloProfissional}`;
    document.getElementById("minhaBio").innerText = `Biografia: ${minhaBio}`;
    document.getElementById("curso").innerText = `Curso: ${curso.nome}`;
    document.getElementById("anoIgresso").innerText = `Ano de Igresso: ${anoIgresso}`;
    document.getElementById("anoFormatura").innerText = `Ano da Formatura: ${anoFormatura}`;
}

// 2. Função para verificar e exibir o status/tempo restante da formatura
function verificarStatusFormatura() {
    let anosRestantes = anoFormatura - anoAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let diasRestantes = diaFormatura - diaAtual;
    let elementoTexto = document.getElementById("tempoRestanteParaFormatura");

    if (porcentagem >= 100) {
        elementoTexto.innerText = "Curso concluído, formado!";
    } else if (anosRestantes >= 1) {
        elementoTexto.innerText = `Tempo restante para formatura: ${anosRestantes} anos, ${mesesRestantes} meses e ${diasRestantes} dias. Progresso: ${porcentagem}% concluído.`;
    } else {
        elementoTexto.innerText = `Tempo restante para formatura: ${mesesRestantes} meses e ${diasRestantes} dias. Progresso: ${porcentagem}% concluído.`;
    }
}

// 3. Função para obter o nome do dia da semana (Usa Return e Switch)
function obterNomeDoDia(numeroDoDia) {
    switch (numeroDoDia) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Dia inválido";
    }
}

// 4. Função para renderizar os projetos dinamicamente no container
function renderizarProjetos() {
    const container = document.getElementById("projetos");
    if (!container) return; // Segurança caso o elemento não exista no HTML ainda
    
    container.innerHTML = ""; // Limpa o container antes de renderizar

    for (let i = 0; i < projetos.length; i++) {
        const projeto = projetos[i];
        container.innerHTML += `
            <div class="projeto-card">
                <h2>${projeto.nome}</h2>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(', ')}</p>
                <p><strong>Ferramentas:</strong> ${projeto.conhecimentos}</p>
                <p>${projeto.descricao}</p>
            </div>
        `;
    }
}

// --- LÓGICA DE EXECUÇÃO E EVENTOS ---

// Exibindo nota e dia atual usando document.write (e a função obterNomeDoDia)
let nota = 8; 
let aprovado = (nota >= 6) ? "Aprovado" : "Reprovado";
document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

let diaSemana = DATAATUAL.getDay() + 1; 
let diaEscrito = obterNomeDoDia(diaSemana);
document.write(`<p> Hoje é: ${diaEscrito} </p>`);

// Configuração do Quiz de Perfil Dev
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

if (btnVisual && btnLogica && resultadoQuiz) {
    btnVisual.addEventListener("click", function() {
        pontosFront++;
        
        resultadoQuiz.innerHTML = `
            <strong>🎨 Você tem perfil Front-End!</strong><br>
            Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
            Tecnologias pra você: HTML, CSS, React, Vue.
        `;
        estilizarResultadoQuiz("#e8f4fd");
        exibirPerfilGeral();
    });

    btnLogica.addEventListener("click", function() {
        pontosBack++;
        
        resultadoQuiz.innerHTML = `
            <strong>⚙️ Você tem perfil Back-End!</strong><br>
            Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
            Tecnologias pra você: Node.js, Python, bancos de dados.
        `;
        estilizarResultadoQuiz("#e8f8f0");
        exibirPerfilGeral();
    });
}

function estilizarResultadoQuiz(corFundo) {
    resultadoQuiz.style.backgroundColor = corFundo;
    resultadoQuiz.style.padding = "12px";
    resultadoQuiz.style.borderRadius = "8px";
    resultadoQuiz.style.marginTop = "10px";
}

function exibirPerfilGeral() {
    let perfilTexto = "";
    if (pontosFront > pontosBack) {
        perfilTexto = "<br><br><strong>Resultado Acumulado:</strong> Perfil predominantemente Front-End! 🎨";
    } else if (pontosBack > pontosFront) {
        perfilTexto = "<br><br><strong>Resultado Acumulado:</strong> Perfil predominantemente Back-End! ⚙️";
    } else {
        perfilTexto = "<br><br><strong>Resultado Acumulado:</strong> Perfil Full Stack equilibrado! 🔄";
    }
    resultadoQuiz.innerHTML += perfilTexto;
}

// Dados dos Projetos (Array de Objetos)
let projetos = [
    {
        nome: "Aplicação de Estacionamento",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        conhecimentos: "VsCode, GitHub, pip, PyInstaller,...",
        descricao: "Aplicação de Estacionamento é um projeto que simula a gestão de um estacionamento, permitindo aos usuários registrar entradas e saídas de veículos, calcular tarifas e gerar relatórios. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript para criar uma interface amigável e funcional. Além disso, o projeto envolveu o uso de ferramentas como VsCode para desenvolvimento, GitHub para controle de versão, pip para gerenciamento de dependências e PyInstaller para empacotamento da aplicação."
    },
    {
        nome: "Aplicação de Controle de Estoque",
        tecnologias: ["Python", "Tkinter", "fpdf"],
        conhecimentos: "VsCode, GitHub, pip, PyInstaller,...",
        descricao: "Aplicação de Controle de Estoque é um projeto que permite aos usuários gerenciar o estoque de uma loja ou empresa. A aplicação oferece funcionalidades para adicionar, editar e remover produtos, além de calcular o valor total do estoque e gerar relatórios. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript para criar uma interface intuitiva e responsiva. Ferramentas como VsCode foram utilizadas para o desenvolvimento, GitHub para controle de versão, pip para gerenciamento de dependências e PyInstaller para empacotamento da aplicação."
    }
];

// --- INICIALIZAÇÃO AUTOMÁTICA ---
carregarDadosDoPerfil();
verificarStatusFormatura();
renderizarProjetos();