import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

import { ClienteDadosGerais } from '../../../_interfaces/clientes/cliente-dados-gerais.interface';

@Injectable({
  providedIn: 'root',
})
export class SetClienteDadosGeraisService {
  constructor(private getClienteService: GetClientesService) {}

  setClienteDadosGerais(gerais: ClienteDadosGerais) {
    // TODO: Exercício 3.1 e 4.1
  }
}
