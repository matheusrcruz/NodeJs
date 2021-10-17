const chalk = require("chalk");
const pegaArquivo = require("./index");

const caminho = process.argv;

async  function processarTexto(caminhoArquivo){
    const resultado = await pegaArquivo(caminhoArquivo[2]);
    console.log(chalk.yellow('Lista de links'), resultado);
}

processarTexto(caminho);

console.log()

