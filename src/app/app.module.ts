import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerLocaleData, CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import {
  DateAdapter as DateAdapterMaterial,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

import { PendingChangesGuard } from './_guards/pending-changes/pending-changes.guard';

// custom modules
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ClientesModule } from './clientes/clientes.module';

// custom pipe
import { CustomMatPaginatorIntl } from './_biblioteca/custommatpaginatorintl.provider';

// custom components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu-principal/menu/menu.component';
import { ProgressBarColorDirective } from './shared/espera/progress-bar-color';
import { LoaderService } from './_services/partilhados/loader.service';
import { LoaderInterceptor } from './shared/loader/loader.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProgressBarColorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HomeModule,
    ClientesModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [
    { provide: LOCALE_ID, useValue: navigator.language },
    { provide: MAT_DATE_LOCALE, useValue: navigator.language },
    {
      provide: DateAdapterMaterial,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    PendingChangesGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
