import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';

import { ClientesComponent } from './clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

const clientesRoutes: Routes = [
  {
    path: 'clientes',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ClientesComponent,
      },
      {
        path: ':idCliente',
        component: ClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
