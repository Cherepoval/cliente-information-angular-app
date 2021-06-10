import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { SubscriptionLike, forkJoin } from 'rxjs';
import * as moment from 'moment';

import { ConfirmacaoDialogComponent } from '../../../shared/confirmacao-dialog/confirmacao-dialog.component';

import { Tradutor } from '../../../_services/tradutor.service';
import { FuncoesService } from '../../../shared/funcoes.service';
import { SetClienteDadosGeraisService } from '../../../_services/clientes/ficha-cliente/set-cliente-dados-gerais.service';
import { DeleteClienteService } from '../../../_services/clientes/ficha-cliente/delete-cliente.service';

import { ClienteDadosGerais } from '../../../_interfaces/clientes/cliente-dados-gerais.interface';

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.component.html',
})
export class FichaClienteComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();
  @Input() idCliente: number;
  @Output() gravarFichaCliente: EventEmitter<any> = new EventEmitter();
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  formulario: FormGroup;
  formularioGerais: FormGroup;
  formularioContactos: FormGroup;

  traducaoClienteAdicionado: string;
  traducaoDadosGravados: string;
  traducaoEliminacao: string;

  // TODO: Exercício 2
  menuVertical = ['Gerais', 'Contactos'];
  currentMenuVertical = 'Gerais';

  constructor(
    private formBuilder: FormBuilder,
    public mediaMatcher: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef,
    private location: Location,
    private dialog: MatDialog,
    private tradutor: Tradutor,
    private funcoesService: FuncoesService,
    private setClienteDadosGeraisService: SetClienteDadosGeraisService,
    private deleteClienteService: DeleteClienteService
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 991px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.inicializarFormulario();
  }

  ngOnInit() {
    this.traducoes();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((el) => el.unsubscribe());
    this.dialog.closeAll();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  inicializarFormulario() {
    // TODO: Exercício 2
    this.formularioGerais = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      morada: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      genero: [0, Validators.required],
    });

    this.formularioContactos = this.formBuilder.group({
      telemovel: ['', [Validators.required, Validators.maxLength(9), Validators.pattern(this.funcoesService.regTelemovel)]],
      email: ['', [Validators.required, Validators.pattern(this.funcoesService.regEmail)]]
    });

    this.formulario = this.formBuilder.group({
      gerais: this.formularioGerais,
      contactos: this.formularioContactos
    });
  }

  onSelectMenuVertical(menu: string) {
    this.currentMenuVertical = menu;
  }

  onVoltar() {
    this.location.back();
  }

  onGravar() {
    // TODO: Exercício 3.1 e 4.1
  }

  onApagar() {
    // TODO: Exercício 3.2
  }

  // Só ativa o botão se nenhum dos formulários for inválido e se algum dos formulários for modificado
  botaoGravarDisabled(): boolean {
    // TODO: Exercício 2
    return (
      this.formulario.get('gerais').invalid ||
      (this.formulario.get('gerais').pristine)
    );
  }

  traducoes() {
    this.subscriptions.push(
      forkJoin([
        this.tradutor.get('DadosGravados'),
        this.tradutor.get('ClienteAdicionado'),
        this.tradutor.get('MensagemEliminacao'),
      ]).subscribe(([traducao1, traducao2, traducao3]) => {
        this.traducaoDadosGravados = traducao1;
        this.traducaoClienteAdicionado = traducao2;
        this.traducaoEliminacao = traducao3;
      })
    );
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
