import { Contato } from "../models/Contato";
import { ContatoDAO } from "./ContatoDAO";

export class ContatoJsonDAO extends ContatoDAO {
  constructor() {
    super("contacts.json");

    const resultados = JSON.parse(this.conteudoArquivo);

    for (let i = 0; i < resultados.length; i++) {
      const r = resultados[i];
      const c = new Contato(r.name, r.phone, r.email);
      this.contatos.push(c);
    }
  }
}
