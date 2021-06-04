import { MatPaginatorIntl } from '@angular/material/paginator';
import { Tradutor } from '../_services/tradutor.service';
import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel;
  nextPageLabel;
  previousPageLabel;

  constructor(
    private translateCore: TranslateService,
    private translate: Tradutor
  ) {
    super();
    this.translateCore.onLangChange.subscribe((e: Event) => {
      this.traduzir();
    });
    this.translateCore.onDefaultLangChange.subscribe((e: Event) => {
      this.traduzir();
    });

    this.traduzir();
  }

  traduzir() {
    this.translate
      .get('ItensPagina')
      .subscribe((res: string) => (this.itemsPerPageLabel = res));

    this.translate
      .get('Proximo')
      .subscribe((res: string) => (this.nextPageLabel = res));

    this.translate
      .get('Anterior')
      .subscribe((res: string) => (this.previousPageLabel = res));

    this.changes.next();
  }

  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
  };
}
