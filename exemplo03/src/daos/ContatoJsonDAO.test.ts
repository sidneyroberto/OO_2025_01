import { Contato } from "../models/Contato";
import { ContatoJsonDAO } from "./ContatoJsonDAO";

describe("Testes da classe ContatoJsonDAO", function () {
  test("deve recuperar um contato por seu e-mail", function () {
    const dao = new ContatoJsonDAO();
    const contato = dao.recuperarPorEmail("Luiza99@live.com");
    expect(contato.nome).toBe("Luiza Silva");
  });

  test("deve salvar um contato corretamente", function () {
    const contato = new Contato(
      "Fulano de Tal",
      "(99) 99999-9999",
      "fulano@email.com"
    );
    const dao = new ContatoJsonDAO();
    dao.salvar(contato);
    const c = dao.recuperarPorEmail(contato.email);
    expect(c).not.toBe(undefined);
  });
});
