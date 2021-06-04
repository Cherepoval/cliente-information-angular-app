import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosGerais } from '../../../_interfaces/clientes/cliente-dados-gerais.interface';

@Injectable({
  providedIn: 'root',
})
export class GetClienteNomeService {
  constructor(private getClienteService: GetClientesService) {}

  getClienteNome(idCliente: number): string {
    const cliente: ClienteDadosGerais = this.getClienteService.clientesDadosGerais.find(
      (x) => x.idCliente === idCliente
    );

    if (cliente) {
      return cliente.nome;
    } else {
      return '-';
    }
  }
}
