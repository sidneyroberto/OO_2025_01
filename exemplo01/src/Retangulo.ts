export class Retangulo {
  base: number;
  altura: number;

  /**
   * Precisamos definir que o retângulo
   * necessita de valores de base e altura
   * em sua construção.
   */
  constructor(alturaInicial: number, baseInicial: number) {
    if (alturaInicial < 0 || baseInicial < 0) {
      // Lança um erro
      throw new Error("Altura ou base inválida");
    }
    // O operador this acessa o atributo altura do objeto
    this.altura = alturaInicial;

    // O operador this acessa o atributo base do objeto
    this.base = baseInicial;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}
