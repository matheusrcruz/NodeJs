const pegaArquivo = require('../index'); //Aponta para o arquivo aonde está a func que queremos testar

const arrayResult = [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
  ]
describe('pegaArquivo::', ()=>{
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
      })
      it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:\labs\NodeJS\test\arquivos\texto1.md') 
        expect(resultado).toEqual(arrayResult)
      })
      
})

