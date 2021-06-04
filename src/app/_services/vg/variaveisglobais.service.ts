import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class VariaveisGlobais {
  public token: string;
  public idFuncionario: number;
  public idFuncionarioFuncao: number;
  public funcionario: string;
  public idTerminal: number;
  public terminal: string;
  public idArmazem: number;
  public armazem: string;
  public idLoja: number;
  public loja: string;
  public localidadeLoja: string;
  public idEmpresa: number;
  public empresa: string;
  public url: string;
  public lingua: string;
  public idUltimaMensagem: string;
  public razaoSocial: string;
  public corAgenda: string;
  public corTexto: string;
  public veterinaria: string;
  public cabeleireiro: string;
  public audiologia: string;
  public otica: string;
  public estetica: string;
  public nutricao: string;
  public idMeteo: string;
  public iniciais: string;
  public timeoutOnline: number;
  public medicas: number;
  public idLojaTamanho: number;
  public idClienteTamanho: number;
  public idTurno: number;
  public ivaIncluido: number;
  public acessoConfig: number;
  public acessoChat: number;
  public acessoFerramentas: number;
  public numCertificacaoPrograma: number;
  public software: number;
  public moeda: string;

  constructor(private platformLocation: PlatformLocation) {}

  public isDev() {
    const currentOrigin: string = (this.platformLocation as any).location.origin;
    return currentOrigin === 'http://localhost:4200';
  }

  public getMenus() {
    return [
      'Atendimento',
      'Agenda',
      'Clientes',
      'Animais',
      'Ferramentas',
      'Configuracoes',
      'Tabelas',
      'Caixa',
      'Gestao',
    ];
  }

  public getDashboards() {
    return [
      'Chat',
      'Meteorologia',
      'FollowUpsHoje',
      'GraficoVendas',
      'ProximasMarcacoes',
      'UltimosDocumentosEmitidos',
    ];
  }
}
