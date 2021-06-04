import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkMaterialAngularModule } from './cdk-material-angular/cdk-material-angular.module';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

import { EsperaComponent } from './espera/espera.component';
import { RowItemComponent } from './row-item/row-item.component';

import { SemRegistosComponent } from './sem-registos/sem-registos.component';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    CdkMaterialAngularModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    EsperaComponent,
    RowItemComponent,
    SemRegistosComponent,
    ConfirmacaoDialogComponent,
    CabecalhoComponent,
    LoaderComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CdkMaterialAngularModule,
    EsperaComponent,
    RowItemComponent,
    SemRegistosComponent,
    ConfirmacaoDialogComponent,
    CabecalhoComponent,
    LoaderComponent,
  ],
  providers: [
    CurrencyPipe,
    DecimalPipe,
  ],
  entryComponents: [ConfirmacaoDialogComponent],
})
export class SharedModule {}
