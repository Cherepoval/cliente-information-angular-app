import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sem-registos',
  templateUrl: './sem-registos.component.html',
  styleUrls: ['./sem-registos.component.css']
})
export class SemRegistosComponent implements OnInit {
  @Input()
  titulo: string;

  @Input()
  centered = true;

  constructor() {}

  ngOnInit() {}
}
