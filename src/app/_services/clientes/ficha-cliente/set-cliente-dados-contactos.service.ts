import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosContactos } from '../../../_interfaces/clientes/cliente-dados-contactos.interface';

@Injectable({
  providedIn: 'root',
})
export class SetClienteDadosContactosService {
  constructor(private getClienteService: GetClientesService) { }

  setClienteDadosContactos(dadosContactosParaGravar: ClienteDadosContactos, idCliente: number) {
    // TODO: Exercício 3.1 e 4.1

    if (idCliente !== 0) {
      this.getClienteService.updateClienteDadosContactos(dadosContactosParaGravar, idCliente);
    } else {
      let length = this.getClienteService.getClientesTotal();
      let idDoUltimoCliente = this.getClienteService.getIdDoUltimoCliente();

      dadosContactosParaGravar.idCliente = ++idDoUltimoCliente;
      this.getClienteService.addNewClienteDadosContactos(dadosContactosParaGravar);

      console.log(dadosContactosParaGravar);
    }
  }
}
