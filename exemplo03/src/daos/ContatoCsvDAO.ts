import { Contato } from "../models/Contato";
import { ContatoDAO } from "./ContatoDAO";

export class ContatoCsvDAO extends ContatoDAO {
  constructor() {
    super("contacts.csv");

    const linhas = this.conteudoArquivo.split("\n");

    for (let i = 1; i < linhas.length; i++) {
      const dados = linhas[i].split(",");
      const c = new Contato(dados[0], dados[2], dados[1]);
      this.contatos.push(c);
    }
  }
}
