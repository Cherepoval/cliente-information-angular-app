import { Injectable } from '@angular/core';

import { GetClientesService } from '../get-clientes.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteClienteService {
  constructor(private getClienteService: GetClientesService) { }

  deleteCliente(idCliente: number) {
    // TODO: Exercício 3.2
    this.getClienteService.deleteClienteDadosGerais(idCliente);
    this.getClienteService.deleteClienteDadosContactos(idCliente);
  }
}
