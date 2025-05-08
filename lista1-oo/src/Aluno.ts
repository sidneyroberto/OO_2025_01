export class Aluno {
  nome: string;
  private _idade: number;
  private _nota: number;

  constructor(nome: string, idade: number, nota: number) {
    this.nome = nome;
    this._idade = idade;
    this._nota = nota;
  }

  get idade() {
    return this._idade;
  }

  set idade(novaIdade: number) {
    if (novaIdade > 0) {
      this._idade = novaIdade;
    } else {
      console.log("Idade inválida");
    }
  }

  get nota() {
    return this._nota;
  }

  set nota(novaNota: number) {
    if (novaNota >= 0 && novaNota <= 10) {
      this._nota = novaNota;
    } else {
      console.log("Nota inválida!");
    }
  }

  exibirResumo() {
    console.log(
      `Aluno: ${this.nome}, Idade: ${this.idade}, Nota: ${this.nota}`
    );
  }

  foiAprovado() {
    if (this._nota >= 6) {
      return true;
    }

    return false;
  }

  compararNotas(outroAluno: Aluno) {
    if (this._nota === outroAluno.nota) {
      return `${this.nome} tem a mesma nota que ${outroAluno.nome}.`;
    } else if (this._nota > outroAluno.nota) {
      return `${this.nome} tem nota maior que ${outroAluno.nome}.`;
    }
    return `${this.nome} tem a nota menor que ${outroAluno.nome}.`;
  }
}
