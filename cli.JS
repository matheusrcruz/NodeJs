const chalk = require("chalk");
const pegaArquivo = require("./index");
const validaURLs = require('./http-validacoes');

const caminho = process.argv;

async  function processarTexto(caminhoArquivo){
    const resultado = await pegaArquivo(caminhoArquivo[2]);
    if(caminho[3] == 'validar'){
        console.log(chalk.yellow('Links Validados'), await validaURLs(resultado));
    }else{
        console.log(chalk.yellow('Lista de links'), resultado);
    }
   
}

processarTexto(caminho);

console.log()

