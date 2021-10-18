const chalk = require('chalk');
const fs = require('fs');


function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https:?\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResult.push({
            [temp[1]]: temp[2]
        })
    }
    return arrayResult.length === 0 ? 'não ha arquivos': arrayResult;
}

function tratarError(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';

    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        tratarError(erro);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

module.exports = pegaArquivo;
