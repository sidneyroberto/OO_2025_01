export class ContaBancaria {
  private _saldo: number;
  private _numero: string;
  private _agencia: string;

  constructor() {
    this._saldo = 0;
  }
  /**
   * Concede acesso ao valor do saldo (getter)
   */
  get saldo() {
    return this._saldo;
  }

  /**
   * Realiza a alteração do valor do saldo (setter)
   */
  set saldo(novoSaldo: number) {
    if (novoSaldo > 0) {
      this._saldo = novoSaldo;
    }
  }

  get agencia() {
    return this._agencia;
  }

  set agencia(novaAgencia: string) {
    /**
     * Verifica se o novo valor bate com
     * o padrão 0000-0
     */
    if (novaAgencia.match(/^\d{4}-\d{1}$/)) {
      this._agencia = novaAgencia;
    }
  }

  get numero() {
    return this._numero;
  }

  set numero(novoNumero: string) {
    if (novoNumero.match(/^\d{5}-\d{1}$/)) {
      this._numero = novoNumero;
    }
  }
}
