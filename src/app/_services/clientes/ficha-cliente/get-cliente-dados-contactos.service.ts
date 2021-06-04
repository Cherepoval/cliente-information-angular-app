import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosContactos } from '../../../_interfaces/clientes/cliente-dados-contactos.interface';

@Injectable({
  providedIn: 'root',
})
export class GetClienteDadosContactosService {
  constructor(private getClienteService: GetClientesService) {}

  getClienteDadosContactos(idCliente: number) {
    // TODO: Exercício 2
  }
}
