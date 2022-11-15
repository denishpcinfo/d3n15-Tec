import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { AppConstants } from '../app-constants';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const BASE_URL = AppConstants.baseServidor;

const API_URL = `${BASE_URL}/api/produto/`

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  salvarProduto(produto: Produto): Observable<any> {
    return this.http.post(API_URL, produto, {});
  }

  getFindAllProduto(): Observable<any> {
    return this.http.get<any>(API_URL, );
  }
}
