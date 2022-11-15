import { Injectable } from '@angular/core';
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../models/purchase";
import {Observable} from "rxjs";
import { AppConstants } from '../app-constants';

const BASE_URL = AppConstants.baseServidor;

const API_URL = `${BASE_URL}/api/purchase-history`

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  savePurchase(purchase: Purchase): Observable<any> {
    return this.http.post(API_URL, purchase, );
  }

  getAllPurchaseItems(): Observable<any> {
    return this.http.get(API_URL, );
  }
}
