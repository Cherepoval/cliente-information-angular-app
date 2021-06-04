import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { EsperaComponent } from './shared/espera/espera.component';

const appRoutes: Routes = [
  { path: 'espera', component: EsperaComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only : true
      scrollPositionRestoration: 'top', // always on top when navigate to new route
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
