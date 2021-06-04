import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { SubscriptionLike, timer } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthGuard } from '../../_guards/auth.guard';
import { VariaveisGlobais } from '../../_services/vg/variaveisglobais.service';

import { ItensMenu, ItensMenuInterface } from '../itens-menu';
import { Tradutor } from 'src/app/_services/tradutor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();

  isLoaded = false;
  prefMenus: string[] = [];
  itensMenu: ItensMenuInterface[];

  // Desktop
  indexItemSelecionado = 4;
  botaoAtivo = false;

  // Mobile
  @ViewChild('snav', { static: false })
  snav: { toggle: () => void };
  openedNav: boolean;

  constructor(
    private tradutor: Tradutor,
    public vg: VariaveisGlobais,
    private authGuard: AuthGuard,
    public mediaMatcher: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    // Observable que vem do AuthGuard com o vg atualizado
    this.subscriptions.push(
      this.authGuard.variaveisGlobaisAtualizadas$.subscribe(() => {
        // Desktop
        if (sessionStorage.getItem('menu-selecionado') !== null) {
          this.indexItemSelecionado = Number(sessionStorage.getItem('menu-selecionado'));
          this.botaoAtivo = true;
        }
      })
    );
  }

  ngOnInit() {
    this.ordenarMenus(['Clientes']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }

  limparSessionStorage() {
    sessionStorage.clear();
    // Re-gravação do token no sessionStorage
    sessionStorage.setItem('token', this.vg.token);
  }

  onItemVariavel(i: number) {
    this.indexItemSelecionado = i;
    this.botaoAtivo = true;
    this.limparSessionStorage();
    sessionStorage.setItem('menu-selecionado', String(this.indexItemSelecionado));
  }

  ordenarMenus(menus) {
    const d: string[] = menus.concat(this.vg.getMenus());
    menus = d.filter((v, i) => d.findIndex((item) => item === v) === i);
    const auxMenus = [];
    const prefMenus = menus;
    this.itensMenu = new ItensMenu(this.vg).itensMenu;
    prefMenus.forEach((pref: string) => {
      this.itensMenu.forEach((item) => {
        if (pref.toLowerCase() === item.texto.toLowerCase()) {
          auxMenus.push(item);
        }
      });
    });
    this.itensMenu = auxMenus;

    this.isLoaded = true;
  }

  // Mobile
  verificarSideNav() {
    if (this.openedNav) {
      this.snav.toggle();
    }
  }

  onItemSelecionado() {
    this.snav.toggle();
    this.limparSessionStorage();
  }
}
