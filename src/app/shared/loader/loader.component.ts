import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from '../../_services/partilhados/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input()
  isModal: boolean;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
