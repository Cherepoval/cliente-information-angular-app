import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SubscriptionLike } from 'rxjs';

import { GetClienteDadosContactosService } from '../../../../_services/clientes/ficha-cliente/get-cliente-dados-contactos.service';

import { ClienteDadosContactos } from '../../../../_interfaces/clientes/cliente-dados-contactos.interface';

@Component({
  selector: 'app-ficha-cliente-contactos',
  templateUrl: './ficha-cliente-contactos.component.html',
  styleUrls: ['./ficha-cliente-contactos.component.css'],
})
export class FichaClienteContactosComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();
  @Input() idCliente: number;
  @Input() formulario: FormGroup;

  constructor(private getClienteDadosContactosService: GetClienteDadosContactosService) { }

  ngOnInit() {
    if (this.idCliente) {
      this.refrescarFormulario(
        this.getClienteDadosContactosService.getClienteDadosContactos(this.idCliente)
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
  }

  refrescarFormulario(dadosContactos: ClienteDadosContactos) {
    // TODO: Exercício 2
    this.formulario.patchValue({
      telemovel: dadosContactos.telemovel,
      email: dadosContactos.email
    })
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
