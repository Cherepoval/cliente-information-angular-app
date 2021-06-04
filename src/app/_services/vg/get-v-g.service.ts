import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VariaveisGlobais } from './variaveisglobais.service';

import { InterfaceVG } from '../../_interfaces/vg/vg.interface';

@Injectable({
  providedIn: 'root',
})
export class GetVGService {
  constructor(private http: HttpClient, private vg: VariaveisGlobais) {}

  getVG() {
    const body = {
      token: this.vg.token,
    };
    return this.http.post<{
      response: string;
      payload: {
        msgerror?: string;
        result?: InterfaceVG;
      };
    }>(this.vg.url + 'vg', JSON.stringify(body));
  }

  getVGAsync(): Promise<VGAsync> {
    const body = {
      token: this.vg.token,
    };
    return this.http
      .post<{
        response: string;
        payload: {
          msgerror?: string;
          result?: InterfaceVG;
        };
      }>(this.vg.url + 'vg', JSON.stringify(body))
      .toPromise();
  }
}

export interface VGAsync {
  response: string;
  payload: {
    msgerror?: string;
    result?: InterfaceVG;
  };
}
