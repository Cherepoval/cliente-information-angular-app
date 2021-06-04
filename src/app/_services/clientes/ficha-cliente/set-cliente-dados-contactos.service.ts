import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosContactos } from '../../../_interfaces/clientes/cliente-dados-contactos.interface';

@Injectable({
  providedIn: 'root',
})
export class SetClienteDadosContactosService {
  constructor(private getClienteService: GetClientesService) {}

  setClienteDadosContactos(contactos: ClienteDadosContactos) {
    // TODO: Exercício 3.1 e 4.1
  }
}
