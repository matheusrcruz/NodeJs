const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
    //promises async await
    try{
    const arrayStatus = await Promise
    .all(arrayURLs
        .map(async url =>{
            const res = await fetch(url)
            return res.status;
    }))
    return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
  
}

function geraArrayURLs(arrayLinks) {
    return arrayLinks
    .map(objtolink => Object
        .values(objtolink).join());
}


async function validaURLs(arrayLinks) {
  const links = geraArrayURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  const resultados = arrayLinks.map((objeto, indice) =>({ 
      ...objeto, 
      status: statusLinks[indice]
    }))

    return resultados;
}

module.exports = validaURLs;