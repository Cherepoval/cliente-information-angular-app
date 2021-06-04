import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { VariaveisGlobais } from './_services/vg/variaveisglobais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  idleState = 'Not started.';
  timedOut = false;

  constructor(private router: Router, private vg: VariaveisGlobais) {
    this.isMobile = window.innerWidth <= 1024;

    this.vg.url = 'https://inventoredev.eu/api-online/';
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.vg.armazem = '';
    this.vg.empresa = '';
    this.vg.funcionario = '';
    this.vg.idArmazem = 0;
    this.vg.idEmpresa = 0;
    this.vg.idFuncionario = 0;
    this.vg.idLoja = 0;
    this.vg.idTerminal = 0;
    this.vg.loja = '';
    this.vg.terminal = '';
    this.vg.token = '';
  }
}
