import { ContaBancaria } from "./ContaBancaria";

const conta = new ContaBancaria();

// Exibindo o valor de _saldo por meio de "get saldo"
console.log(conta.saldo);

// Acessando _saldo por meio de set saldo
conta.saldo = 1000;
console.log(conta.saldo);

conta.saldo = -500;
console.log(conta.saldo);

conta.agencia = "0123-4";
console.log(conta.agencia);
conta.agencia = "012345"; // valor inválido
console.log(conta.agencia);

conta.numero = "01234-5";
console.log(conta.numero);
conta.numero = "9090909090";
console.log(conta.numero);
