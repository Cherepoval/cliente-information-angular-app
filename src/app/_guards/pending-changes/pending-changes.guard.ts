import {
  CanDeactivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate(): Observable<boolean>;
}

@Injectable()
export class PendingChangesGuard
  implements CanDeactivate<ComponentCanDeactivate> {
  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {}

  /* ATENÇÃO: Os 4 parâmetros são necessários, NÃO apagar nenhum */
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    // Verifica se a aplicação não está a tentar navegar para uma página de erro. Se estiver não mostra a modal e navega imediatamente
    if (nextState.url.split('/')[1] === 'erro') {
      return of(true);
    }

    return component.canDeactivate().pipe(
      switchMap((resultFromConfirmDialog: boolean) => {
        if (!resultFromConfirmDialog) {
          const currentUrlTree = this.router.createUrlTree([], currentRoute);
          const currentUrl = currentUrlTree.toString();
          this.location.go(currentUrl);
          return of(false);
        }
        return of(true);
      })
    );
  }
}
