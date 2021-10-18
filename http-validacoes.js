    function geraArrayURLs(arrayLinks){
        return arrayLinks.map(objtolink => Object.values(objtolink).join());
    // return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
    }


    function validaURLs(arrayLinks){
        return geraArrayURLs(arrayLinks);
        // return geraArrayURLs(arrayLinks);
    }

    module.exports = validaURLs;