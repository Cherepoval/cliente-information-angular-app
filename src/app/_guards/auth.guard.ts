import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SubscriptionLike, Subject } from 'rxjs';

import { VariaveisGlobais } from '../_services/vg/variaveisglobais.service';
import { Tradutor } from '../_services/tradutor.service';

import { InterfaceVG } from '../_interfaces/vg/vg.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // Utilizado para atualizar o menu-desktop e menu-mobile
  private variaveisGlobaisAtualizadas = new Subject<VariaveisGlobais>();
  variaveisGlobaisAtualizadas$ = this.variaveisGlobaisAtualizadas.asObservable();

  constructor(
    private vg: VariaveisGlobais,
    private translate: Tradutor
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  preencherVGs(result: InterfaceVG) {
    this.vg.armazem = result.armazem;
    this.vg.empresa = result.empresa;
    this.vg.idArmazem = result.idArmazem;
    this.vg.idEmpresa = result.idEmpresa;
    this.vg.idLoja = result.idLoja;
    this.vg.idTerminal = result.idTerminal;
    this.vg.loja = result.loja;
    this.vg.terminal = result.terminal;
    this.vg.localidadeLoja = result.localidadeLoja;
    this.vg.lingua = result.lingua;
    this.translate.setUserLangLogin(this.vg.lingua);
    this.vg.razaoSocial = result.razaoSocial;
    this.vg.corAgenda = result.corAgenda;
    this.vg.idFuncionario = result.idFuncionario;
    this.vg.funcionario = result.funcionario;
    this.vg.corTexto = result.corTexto;
    this.vg.audiologia = result.audiologia;
    this.vg.veterinaria = result.veterinaria;
    this.vg.cabeleireiro = result.cabeleireiro;
    this.vg.estetica = result.estetica;
    this.vg.nutricao = result.nutricao;
    this.vg.otica = result.otica;
    this.vg.idMeteo = result.idMeteo;
    this.vg.idUltimaMensagem = result.idMensagem;
    this.vg.idFuncionarioFuncao = result.idFuncionarioFuncao;
    this.vg.timeoutOnline = result.timeoutOnline;
    this.vg.medicas = +result.medicas;
    this.vg.idLojaTamanho = result.idLojaTamanho;
    this.vg.idClienteTamanho = result.idClienteTamanho;
    this.vg.idTurno = result.idTurno;
    this.vg.ivaIncluido = result.ivaIncluido;
    this.vg.acessoConfig = result.acessoConfig;
    this.vg.acessoChat = result.acessoChat;
    this.vg.acessoFerramentas = result.acessoFerramentas;
    this.vg.numCertificacaoPrograma = 426;
    this.vg.software = +result.software;
    this.vg.moeda = '€';
  }
}
