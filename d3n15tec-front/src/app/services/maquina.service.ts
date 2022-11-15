import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquina } from '../models/maquina';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';
import { AppConstants } from '../app-constants';

const BASE_URL = AppConstants.baseServidor;

const API_URL = `${BASE_URL}/api/maquina/`

@Injectable({
  providedIn: 'root'
})
export class MaquinaService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }


  salvarMaquina(maquina: Maquina): Observable<any> {

  }

}
