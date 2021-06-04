import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { VariaveisGlobais } from './vg/variaveisglobais.service';

@Injectable({
  providedIn: 'root'
})
export class Tradutor {
  private currentLang: string;

  constructor(
    private translate: TranslateService,
    @Inject(LOCALE_ID) private _locale: string,
    @Inject(MAT_DATE_LOCALE) private _dateLocale: string,
    private vg: VariaveisGlobais
  ) {
    if (this.translate.getBrowserCultureLang()) {
      if (
        this.translate.getBrowserLang() === 'pt' ||
        this.translate.getBrowserLang() === 'fr' ||
        this.translate.getBrowserLang() === 'es'
      ) {
        this.translate.setDefaultLang(this.translate.getBrowserLang());
        this.currentLang = this.translate.getBrowserLang();
      } else {
        this.translate.setDefaultLang('en');
        this.currentLang = 'en';
      }
    } else {
      this.translate.setDefaultLang('en');
      this.currentLang = 'en';
    }
  }

  public static getBrowserLang(): string {
    return this.getBrowserLang();
  }

  get(chave: string) {
    return this.translate.get(chave);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  setUserLang() {
    // this.getLoginConfiguracaoService.getLoginConfiguracao().subscribe(data => {
    //   if (data.response === 'ok') {
    //     this.currentLang = data.payload.result.lingua;
    //     this.translate.setDefaultLang(this.currentLang);
    //     this._locale = this.currentLang;
    //     this._dateLocale = this.currentLang;
    //   }
    // });
    this.currentLang = this.vg.lingua;
    this.translate.setDefaultLang(this.currentLang);
    this._locale = this.currentLang;
    this._dateLocale = this.currentLang;
  }

  setUserLangLogin(idioma: string) {
    this.vg.lingua = idioma;
    this.currentLang = idioma;
    this.translate.setDefaultLang(this.currentLang);
    this._locale = this.currentLang;
    this._dateLocale = this.currentLang;
  }

  getLocale() {
    return this._dateLocale;
  }
}
