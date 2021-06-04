import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  @Input() titulo: string[];
  @Input() subTitulo: string;
  @Input() backButton = true;
  @Input() traduzirTituloTodo = true;
  @Output() voltar = new EventEmitter<string>();

  constructor(private location: Location) {}

  ngOnInit() {}

  onVoltar() {
    this.voltar.emit('');
    this.location.back();
  }

  atualizarCabecalho(subTituloNovo: string) {
    this.subTitulo = subTituloNovo;
  }
}
