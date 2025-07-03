import { join } from "path";
import { Contato } from "../models/Contato";
import { readFileSync } from "fs";

export class ContatoDAO {
  protected contatos: Contato[];
  protected conteudoArquivo: string;

  constructor(nomeArquivo: string) {
    const caminhoArquivo = join(__dirname, "..", "data", nomeArquivo);
    this.conteudoArquivo = readFileSync(caminhoArquivo, "utf-8");

    this.contatos = [];
  }

  recuperarPorEmail(email: string) {
    /**
     * A função find é uma função que
     * todo vetor já tem definida a qual
     * recebe uma outra função com o filtro
     * da pesquisa e então verifica se existe
     * algum membro que satisfaça o filtro
     */
    const contato = this.contatos.find((c) => c.email === email);
    return contato;
  }

  salvar(contato: Contato) {
    const c = this.recuperarPorEmail(contato.email);
    // Se não existe um contato com este email:
    if (!c) {
      // Adiciona o contato na lista
      this.contatos.push(contato);
    }
  }
}
