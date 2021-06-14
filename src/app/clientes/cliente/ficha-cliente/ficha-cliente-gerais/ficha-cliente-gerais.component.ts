import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SubscriptionLike } from 'rxjs';

import { GetClienteDadosGeraisService } from '../../../../_services/clientes/ficha-cliente/get-cliente-dados-gerais.service';

import { ClienteDadosGerais } from '../../../../_interfaces/clientes/cliente-dados-gerais.interface';

@Component({
  selector: 'app-ficha-cliente-gerais',
  templateUrl: './ficha-cliente-gerais.component.html',
  styleUrls: ['./ficha-cliente-gerais.component.css'],
})
export class FichaClienteGeraisComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();
  @Input() idCliente: number;
  @Input() formulario: FormGroup;

  constructor(private getClienteDadosGeraisService: GetClienteDadosGeraisService) { }

  ngOnInit() {
    if (this.idCliente) {
      this.refrescarFormulario(
        this.getClienteDadosGeraisService.getClienteDadosGerais(this.idCliente)
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  refrescarFormulario(dadosGerais: ClienteDadosGerais) {
    this.formulario.patchValue({
      nome: dadosGerais.nome,
      morada: dadosGerais.morada,
      dataNascimento: dadosGerais.dataNascimento
        ? new Date(dadosGerais.dataNascimento)
        : '',
      genero: dadosGerais.genero,
    });
  }

  onLimparInput(val: string, event) {
    if (event) {
      event.stopPropagation();
    }

    this.formulario.patchValue({
      [val]: '',
    });
    this.formulario.get(val).markAsDirty();
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
