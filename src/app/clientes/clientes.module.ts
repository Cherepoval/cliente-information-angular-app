/* importing  Modulos */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';

/* importing  clientes componentes */
import { ClientesComponent } from './clientes.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FichaClienteComponent } from './cliente/ficha-cliente/ficha-cliente.component';
import { FichaClienteGeraisComponent } from './cliente/ficha-cliente/ficha-cliente-gerais/ficha-cliente-gerais.component';
import { FichaClienteContactosComponent } from './cliente/ficha-cliente/ficha-cliente-contactos/ficha-cliente-contactos.component';

@NgModule({
  imports: [SharedModule, ClientesRoutingModule],
  declarations: [
    ClientesComponent,
    ClienteComponent,
    FichaClienteComponent,
    FichaClienteGeraisComponent,
    FichaClienteContactosComponent
  ],
})
export class ClientesModule { }
