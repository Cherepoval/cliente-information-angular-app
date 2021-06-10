import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosContactos } from '../../../_interfaces/clientes/cliente-dados-contactos.interface';

@Injectable({
  providedIn: 'root',
})
export class GetClienteDadosContactosService {
  constructor(private getClienteService: GetClientesService) { }

  getClienteDadosContactos(idCliente: number): ClienteDadosContactos {
    // TODO: Exercício 2
    return this.getClienteService.clientesDadosContactos.find((x) => x.idCliente === idCliente);
  }
}
