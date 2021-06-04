import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosGerais } from '../../../_interfaces/clientes/cliente-dados-gerais.interface';

@Injectable({
  providedIn: 'root',
})
export class GetClienteDadosGeraisService {
  constructor(private getClienteService: GetClientesService) {}

  getClienteDadosGerais(idCliente: number): ClienteDadosGerais {
    return this.getClienteService.clientesDadosGerais.find((x) => x.idCliente === idCliente);
  }
}
