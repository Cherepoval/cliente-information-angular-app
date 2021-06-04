import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

import { VariaveisGlobais } from 'src/app/_services/vg/variaveisglobais.service';
import { GetClienteNomeService } from '../../_services/clientes/ficha-cliente/get-cliente-nome.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();

  idCliente: number;
  nomeCliente: string;

  indiceMatTab = 0;
  listaTabs = ['Dados'];

  constructor(
    private activatedRoute: ActivatedRoute,
    public vg: VariaveisGlobais,
    private getClienteNomeService: GetClienteNomeService
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.idCliente = +params.get('idCliente');
    });
  }

  ngOnInit() {
    if (this.idCliente !== 0) {
      this.carregarNomeCliente(this.idCliente);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }

  carregarNomeCliente(id: number) {
    this.nomeCliente = this.getClienteNomeService.getClienteNome(id);
  }

  onAtualizarCabecalho(event) {
    if (event && event !== '0') {
      this.idCliente = event;
      this.carregarNomeCliente(event);
    }
  }

  espera() {
    let aux = false;
    this.subscriptions.forEach((element) => {
      if (!element.closed) {
        aux = true;
      }
    });
    return aux;
  }
}
