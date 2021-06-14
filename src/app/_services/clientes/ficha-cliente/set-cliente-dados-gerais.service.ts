import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosGerais } from '../../../_interfaces/clientes/cliente-dados-gerais.interface';


@Injectable({
  providedIn: 'root',
})
export class SetClienteDadosGeraisService {
  constructor(private getClienteService: GetClientesService) { }

  setClienteDadosGerais(dadosGeraisParaGravar: ClienteDadosGerais, idCliente: number) {
    // TODO: Exercício 3.1 e 4.1


    if (idCliente !== 0) {
      this.getClienteService.updateClienteDadosGerais(dadosGeraisParaGravar, idCliente);
    } else {

      let idDoUltimoCliente = this.getClienteService.getIdDoUltimoCliente();
      console.log(idDoUltimoCliente);
      dadosGeraisParaGravar.idCliente = ++idDoUltimoCliente;

      this.getClienteService.addNewClienteDadosGerais(dadosGeraisParaGravar);


      console.log(dadosGeraisParaGravar);
    }

  }
}
