import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '../../_services/partilhados/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  contador = 0;

  constructor(public loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const urlPartido: string[] = req.url.split('/');
    const tamanhoUrlPartido: number = urlPartido.length;

    // Se o pedido HTTP for um dos seguintes (ping, mensagens ou ultima-mensagem-id) ele não mostra o loader
    if (
      urlPartido[tamanhoUrlPartido - 1] !== 'ping' &&
      urlPartido[tamanhoUrlPartido - 1] !== 'mensagens' &&
      urlPartido[tamanhoUrlPartido - 1] !== 'ultima-mensagem-id'
    ) {
      this.contador++;
      this.loaderService.show();
      return next.handle(req).pipe(
        finalize(() => {
          this.contador--;
          if (this.contador === 0) {
            this.loaderService.hide();
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
