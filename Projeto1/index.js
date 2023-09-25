import { Endereco } from "./model/endereco.js"
import { Agencia } from "./model/agencia.js"
import { Cliente } from "./model/cliente.js"
import { Conta } from "./model/conta.js"

let endAg = new Endereco('PE', 'Recife', 'São José', 'Rua da Guia', 1000, '305', '50000-090');
let agSoftex = new Agencia("Softex", 1234, "8132126454","agsoftex@banco.com", endAg);
let endCliente = new Endereco('PE', 'Recife', 'Areias', 'Avenida Tapajós', 602, '123', '50860-015');
let cliente = new Cliente("Marcelo", "123.456.789-00", new Date("1969-12-06").toLocaleDateString(), 1234567, "marcelo@softex.com", "81999999999",endCliente);
let contaCLiente = new Conta(cliente, 4321, agSoftex, 1250.00);

contaCLiente.depositar(200);
contaCLiente.sacar(500);

console.log(contaCLiente);