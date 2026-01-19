// MÁQUINA DE EXTRAÇÃO JOSÉ DIVINO PRADO DA LAPA
async function injetarCargaJDP(idDoElemento, nomeArquivoNoGit) {
    // AJUSTE ESTAS DUAS LINHAS COM SEUS DADOS DO GITHUB
    const usuario = "SEU_USUARIO_GIT"; 
    const repositorio = "NOME_DO_SEU_PROJETO";

    const url = `https://raw.githubusercontent.com/${usuario}/${repositorio}/main/${nomeArquivoNoGit}`;

    try {
        const response = await fetch(url);
        const data = await response.text();
        
        // A Lógica do Mestre: Pega apenas o que está entre as aspas
        const cargaUtil = data.split('"')[1];

        // Renderiza na tela (seja imagem de garota ou produto)
        document.getElementById(idDoElemento).src = "data:image/jpeg;base64," + cargaUtil;
        console.log("MÁQUINA JDP: Carga injetada com sucesso.");
    } catch (e) {
        console.error("FALHA NA MÁQUINA: Verifique o endereço do Git.");
    }
}
// CONTROLE DE NAVEGAÇÃO JDP
let indiceAtual = 1; // Começa no primeiro arquivo (dados1.m)

function carregarProximaMidia() {
    indiceAtual++; // Sobe para o próximo arquivo
    const novoArquivo = `dados${indiceAtual}.m`;
    
    console.log(`MÁQUINA: Buscando nova carga em ${novoArquivo}...`);
    
    // Chama o seu motor principal para injetar a nova imagem
    injetarCargaJDP('id-da-sua-img-aqui', novoArquivo);
}
// CONTROLE DE RETORNO JDP
function carregarMidiaAnterior() {
    // A lógica do mestre: só volta se o índice for maior que 1
    if (indiceAtual > 1) {
        indiceAtual--; 
        const arquivoAnterior = `dados${indiceAtual}.m`;
        
        console.log(`MÁQUINA: Retornando para carga ${arquivoAnterior}...`);
        
        // Aciona o motor para buscar a carga anterior
        injetarCargaJDP('id-da-sua-img-aqui', arquivoAnterior);
    } else {
        console.log("MÁQUINA JDP: Você já está na primeira carga.");
    }
}
