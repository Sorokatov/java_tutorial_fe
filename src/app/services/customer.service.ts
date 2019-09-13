import { Injectable } from '@angular/core';
import {RestApiService} from "./rest-api.service";
import {Customer} from "../models/customer";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL : String = "/customers";
  private _activeCustomer$ = new BehaviorSubject<Customer>(null);
  public activeCustomer$ = this._activeCustomer$.asObservable();

  constructor(private restApiService: RestApiService) {}

  getCustomers(): Observable<Customer[]> {
    return this.restApiService.get<Customer[]>(this.API_URL);
  }

  setActiveCustomer(customer: Customer) {
    this._activeCustomer$.next(customer);
  }
}
