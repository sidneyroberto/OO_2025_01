import { join } from "path";
import { Contato } from "../models/Contato";
import { readFileSync } from "fs";

export class ContatoJsonDAO {
  contatos: Contato[];

  constructor() {
    // Abrir o arquivo contacts.json
    const caminhoArquivo = join(__dirname, "..", "data", "contacts.json");
    const conteudoArquivo = readFileSync(caminhoArquivo, "utf-8");
    // Converte a string com o conteudo do arquivo para um vetor
    const resultados = JSON.parse(conteudoArquivo);

    this.contatos = [];
    for (let i = 0; i < resultados.length; i++) {
      const r = resultados[i];
      const contato = new Contato(r.name, r.phone, r.email);
      this.contatos.push(contato);
    }
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
