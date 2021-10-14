const chalk = require('chalk');
const fs = require('fs');


function tratarError(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

//async await não muda a sintaxe do codigo sincrono
async function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8';

    try{
    const texto = await fs.promises.readFile(caminhoArquivo, encoding);
    console.log(chalk.green(texto));
    }
    catch(erro){
    tratarError(erro);
    }
    finally {
        console.log(chalk.yellow('operação concluída'));
    }
}


// .then(faça) .cath(faça caso de erro)
// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro)=> tratarError(erro));
//     uma está encadeada na outra e não dentro
// }

// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoArquivo, encoding,(erro,texto)=>{
//         if(erro){
//             tratarError(erro);
//         }
//         console.log(chalk.green(texto));
//     })
//  }


pegaArquivo('./texto1.md');
