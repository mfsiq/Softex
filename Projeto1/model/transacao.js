export class Transacao{
  constructor(tipo, data, valor, cliTranferencia, tipoValor){
    this.tipo = tipo;
    this.data = data;
    this.valor = valor;
    this.cliTranferencia = cliTranferencia;
    this.tipoValor = tipoValor;
  }
}