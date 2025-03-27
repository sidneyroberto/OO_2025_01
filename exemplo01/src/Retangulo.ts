export class Retangulo {
  base: number;
  altura: number;

  /**
   * Precisamos definir que o retângulo
   * necessita de valores de base e altura
   * em sua construção.
   */
  constructor(alturaInicial: number, baseInicial: number) {
    // O operador this acessa o atributo altura do objeto
    this.altura = alturaInicial;

    // O operador this acessa o atributo base do objeto
    this.base = baseInicial;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}
