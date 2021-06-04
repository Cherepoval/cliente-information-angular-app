import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {
  visivel = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.visivel = true;
    }, 200);
  }
}
