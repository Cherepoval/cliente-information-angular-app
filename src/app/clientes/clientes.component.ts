import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

import { GetClientesService } from '../_services/clientes/get-clientes.service';
import { ClienteDadosGerais } from '../_interfaces/clientes/cliente-dados-gerais.interface';
import { ClienteDadosContactos } from '../_interfaces/clientes/cliente-dados-contactos.interface';
import { GetClienteDadosContactosService } from '../_services/clientes/ficha-cliente/get-cliente-dados-contactos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  clientesDadosGerais: ClienteDadosGerais[];
  clientesDadosGeraisComContactos;
  clienteContactos: ClienteDadosContactos;

  tamanho = -1;
  index = 0;
  registosPagina = 5;
  opcoesTamanhoPag = [5, 10, 25, 100];
  clienteEventual = false;

  filtro = '';

  constructor(
    private router: Router,
    public mediaMatcher: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef,
    private getClientesService: GetClientesService,
    private getClientesDadosContactosService: GetClienteDadosContactosService
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 991px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => element.unsubscribe());
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  refrescar() {
    // TODO: Exercício 1
    this.clientesDadosGerais = this.getClientesService.getClientes(this.filtro, this.index, this.registosPagina);
    this.tamanho = this.getClientesService.getResultsLength();

    this.clientesDadosGeraisComContactos = [];
    this.clientesDadosGerais.forEach(clienteGerais => {
      this.clienteContactos = this.getClientesDadosContactosService.getClienteDadosContactos(clienteGerais.idCliente);
      Object.assign(this.clienteContactos, clienteGerais);
      this.clientesDadosGeraisComContactos.push(this.clienteContactos);
    });
  }

  onPaginador(event) {
    this.index = event.pageIndex;
    this.registosPagina = event.pageSize;
    this.refrescar();
  }

  onCliente(cliente: ClienteDadosGerais) {
    this.router.navigate(['/clientes', cliente.idCliente]);
  }

  onCriarCliente() {
    this.router.navigate(['/clientes', '0']);
  }

  onPesquisaClientes() {
    this.tamanho = -1;
    this.index = 0;
    this.refrescar();
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
