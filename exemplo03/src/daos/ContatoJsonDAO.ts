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
    this.contatos = JSON.parse(conteudoArquivo);
    console.log(this.contatos);
  }
}
