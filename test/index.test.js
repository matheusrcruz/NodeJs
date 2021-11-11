const pegaArquivo = require("../index"); //Aponta para o arquivo aonde está a func que queremos testar

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];
describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    const resultado = await pegaArquivo(
      "/home/matheus/workspace/NodeJs/test/arquivos/texto1.md"
    );
    expect(resultado).toEqual(arrayResult);
  });
  it('deve retorna mensagem "não há links"', async () => {
    const resultado = await pegaArquivo(
      "/home/matheus/workspace/NodeJs/test/arquivos/texto1_semLink.md"
    );
    expect(resultado).toBe("não há links");
  });
  it("deve lancar um error na falta de arquivo", () => {
    async function capturaErro() {
      await pegaArquivo("/home/matheus/workspace/NodeJs/test/arquivos");
      expect(capturaErro).toThrowError(/não há arquivo no caminho/)
    }

  });
});
