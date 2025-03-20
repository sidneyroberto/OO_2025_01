import { verificarSituacao } from "./avaliacao";

// Primeiramente, criamos uma suíte de testes
describe("Testes do script de avaliação", function () {
  test("deve retornar a palavra Aprovado quando o aluno tem que ser aprovado", function () {
    const resposta = verificarSituacao(8);
    expect(resposta).toBe("Aprovado");
  });
});
