import { VariaveisGlobais } from '../_services/vg/variaveisglobais.service';

export class ItensMenu {
  public itensMenu: ItensMenuInterface[] = [];

  constructor(private vg: VariaveisGlobais) {
    this.itensMenu.push({
      router: 'clientes',
      class: 'fas fa-users pt-2 icon-size',
      texto: 'Clientes',
    });
  }
}

export interface ItensMenuInterface {
  router: string;
  texto: string;
  class: string;
}
