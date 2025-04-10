import { Retangulo } from "./Retangulo";

// Suíte de testes para a classe Retangulo
describe("Testes sobre a classe Retangulo", function () {
  test("deve calcular a área do retângulo corretamente", function () {
    const ret = new Retangulo(3, 9);
    const area = ret.calcularArea();
    expect(area).toBe(27);
  });

  // Professor vai explicar na aula do dia 03/04
  test("não deve permitir valores de base ou altura não positivos", function () {
    expect(function () {
      new Retangulo(0, -4);
    }).toThrow("Altura ou base inválida");
  });
});
``;
