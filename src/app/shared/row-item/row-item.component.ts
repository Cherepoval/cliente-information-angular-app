import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {
  @Input()
  labelValue: any;

  @Input()
  itemValue: any;

  @Input()
  alignCentered: any;

  @Input()
  htmlValue: any;

  @Input()
  nobreak: boolean;

  constructor() {}

  ngOnInit() {}
}
