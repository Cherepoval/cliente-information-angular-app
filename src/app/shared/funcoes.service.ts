import { Injectable, OnDestroy } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubscriptionLike } from 'rxjs';

import { Tradutor } from '../_services/tradutor.service';

@Injectable({
  providedIn: 'root',
})
export class FuncoesService implements OnDestroy {
  subscriptions: SubscriptionLike[] = new Array<SubscriptionLike>();

  regTelemovel = /^[+0-9]{1,}$/;
  regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private snackBar: MatSnackBar,
    private tradutor: Tradutor,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnDestroy() {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }

  snackBarInfo(key: string, translate: boolean = true) {
    let keyTraduzida: string;
    if (!translate) {
      keyTraduzida = key;
    } else {
      this.subscriptions.push(
        this.tradutor.get(key).subscribe((res: string) => (keyTraduzida = res))
      );
    }
    this.snackBar.open(keyTraduzida, '', {
      duration: 2000,
      panelClass: 'background-verde',
    });
  }

  /**
   * Apply Currency Pipe
   *
   * @param valor - value of price
   *
   * @param lang - Language of user (ex. pt, fr)
   *
   * @param moeda - Currency of user (ex. EUR, USD)
   *
   * @returns - return a string formatted with currency and the respetive Separator ( . or ,)
   */
  formatarMoeda(valor: any, moeda: string = '', lang: string): string {
    if (moeda) {
      return this.currencyPipe
        .transform(valor, moeda, 'symbol', '', lang)
        .replace(/\s/g, ''); // remove espaços entre simbolo e numero
    }

    return this.currencyPipe.transform(valor, moeda, '', '', lang).replace(/\s/g, ''); // remove espaços entre simbolo e numero
  }

  /**
   * Apply decimal pipe
   *
   * @param valor - value of price
   *
   * @param lang - Language of user (ex. pt, fr)
   *
   * @returns value - return a string formatted with the respetive Separator ( . or ,)
   */
  formatarNumero(valor: any, lang: string): string {
    return this.decimalPipe.transform(valor, '1.2-2', lang);
  }
}
